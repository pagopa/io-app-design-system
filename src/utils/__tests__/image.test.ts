import { ImageURISource, Platform } from "react-native";
import { addCacheTimestampToUri } from "../image";

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
      expect(Platform.OS).toBe("ios");
    });

    it("shouldn't add ts param to the provided URI", () => {
      const testUri = { uri: "test" };
      const res = addCacheTimestampToUri(testUri);
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
      expect(Platform.OS).toBe("android");
    });

    it("should add ts param to the provided ImageURISource", () => {
      const testUri: ImageURISource = { uri: "test" };
      const res = addCacheTimestampToUri(testUri);
      const uriRegex = /test\?ts=\d+/;
      if (typeof res === "object" && !Array.isArray(res)) {
        expect(res.uri).toMatch(uriRegex);
      } else {
        fail("res is not a number");
      }
    });

    it("should add ts param to the every element in ImageURISource[]", () => {
      const testUri: ImageURISource = { uri: "test" };
      const res = addCacheTimestampToUri(testUri);
      const uriRegex = /test\?ts=\d+/;
      if (typeof res === "object" && !Array.isArray(res)) {
        expect(res.uri).toMatch(uriRegex);
      } else {
        fail("res is not a number");
      }
    });

    it("should not modify a local image reference", () => {
      const localSrc = 1;
      const res = addCacheTimestampToUri(localSrc);
      if (typeof res === "number") {
        expect(res).toBe(localSrc);
      } else {
        fail("res is not a number");
      }
    });

    it("shouldn't edit the object if no uri is provided", () => {
      const testUri = { bundle: "test" };
      const res = addCacheTimestampToUri(testUri);
      expect(res).toBe(testUri);
    });
  });
});
