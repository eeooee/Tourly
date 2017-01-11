package com.tourly;

import com.facebook.react.ReactActivity;
import me.nucleartux.date.ReactDatePackage;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
      public static MainActivity mainActivity = null;

        public MainActivity() {
            mainActivity = this;
        }
        
    @Override
    protected String getMainComponentName() {
        return "Tourly";
    }
}
