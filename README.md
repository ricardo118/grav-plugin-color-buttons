 The **Color Buttons Plugin** for [Grav](http://github.com/getgrav/grav) adds additional options for Coloring text to the Grav Admin Editor.
 
 # Installation
 
 The Color Buttons plugin is easy to install with GPM.
 
 ```
 $ bin/gpm install color-buttons
 ```
 
 Or clone from GitHub and put in the `user/plugins/color-buttons` folder.
 
 # Configuration
 
 In the Admin Panel, Plugins list, clicking **Color Buttons** will show you some options. You can pick a default preset color palette or you can create your own.
 
 Currently available palettes are
 
 - [Flat UI](https://htmlcolorcodes.com/color-chart/flat-design-color-chart/)
 - [Material Design](https://htmlcolorcodes.com/color-chart/material-design-color-chart/)
 - [Web Safe Colors](https://htmlcolorcodes.com/color-chart/web-safe-color-chart/)
 - Custom Palette (create your own)
      
 If the "Shortcodes Core" plugin is installed, these will also be available:
 
 - Enabling Shortcode parsing instead of Markdown Extra

 
 # Usage
 
 Open a page, and along the editor default buttons you'll see the newly activated buttons.
 
 ### IMPORTANT NOTE
 
 If you do not have the Shortcode Core plugin installed and enabled, the plugin will default to using **Markdown Extra**.
 
 How to enable Markdown Extra:
 
 ### Globally: 
 
 In `user/config/system.yaml` set:
 
 ```yaml
 
     pages:
       markdown:
         extra: false
 
 ```
 
 or via the Admin Plugin -> Configuration -> System -> Markdown Section -> Markdown Extra -> Yes
 
 ### Per Page markdown extra
 
 In page frontmatter set:
 
 ```yaml
 
   markdown:
     extra: false
 
 ```
 
 # Future improvements
 
 This is a first revision of the plugin.
 
 Ideas for the near future:
 
 - Welcome to raise an issue with an improvement or ask @ricardo on the getgrav Slack.
