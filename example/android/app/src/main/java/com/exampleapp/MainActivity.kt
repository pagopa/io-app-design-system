package com.exampleapp

import android.os.Build;
import android.os.Bundle;

import androidx.core.view.WindowCompat;

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate


class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "ExampleApp"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  // https://github.com/crazycodeboy/react-native-splash-screen#third-stepplugin-configuration
  override fun onCreate(savedInstanceState: Bundle?) {
      // Enable edge to edge support
      // https://developer.android.com/develop/ui/views/layout/edge-to-edge?hl=it
      WindowCompat.setDecorFitsSystemWindows(window, false)
      super.onCreate(null);
  }
}