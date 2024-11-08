"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const image_1 = require("../image");
describe("addCacheTimestampToUri", () => {
    describe("on ios", () => {
        beforeAll(() => {
            jest.resetModules();
            jest.mock("react-native/Libraries/Utilities/Platform", () => ({
                OS: "ios", // or 'ios'
                select: () => null
            }));
        });
        it("should set Platform.OS to iOS", () => {
            expect(react_native_1.Platform.OS).toBe("ios");
        });
        it("shouldn't add ts param to the provided URI", () => {
            const testUri = { uri: "test" };
            const res = (0, image_1.addCacheTimestampToUri)(testUri);
            expect(res).toBe(testUri);
        });
    });
    describe("on Android", () => {
        beforeAll(() => {
            jest.resetModules();
            jest.mock("react-native/Libraries/Utilities/Platform", () => ({
                OS: "android", // or 'ios'
                select: () => null
            }));
        });
        it("should set Platform.OS to Android", () => {
            expect(react_native_1.Platform.OS).toBe("android");
        });
        it("should add ts param to the provided ImageURISource", () => {
            const testUri = { uri: "test" };
            const res = (0, image_1.addCacheTimestampToUri)(testUri);
            const uriRegex = /test\?ts=\d+/;
            expect(res?.uri).toBeDefined();
            expect(res?.uri).toMatch(uriRegex);
        });
        it("shouldn't edit the object if no uri is provided", () => {
            const testUri = { bundle: "test" };
            const res = (0, image_1.addCacheTimestampToUri)(testUri);
            expect(res).toBe(testUri);
        });
        it("shouldn't edit the uri if an undefined uri is provided", () => {
            const testUri = { bundle: "test", uri: undefined };
            const res = (0, image_1.addCacheTimestampToUri)(testUri);
            expect(res).toBe(testUri);
        });
        it("should return undefined if undefined is provided", () => {
            const testUri = undefined;
            const res = (0, image_1.addCacheTimestampToUri)(testUri);
            expect(testUri).toBe(res);
        });
    });
});
