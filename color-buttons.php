<?php
namespace Grav\Plugin;

use Grav\Common\GPM\GPM;
use Grav\Common\Grav;
use Grav\Common\Page\Page;
use Grav\Common\Page\Pages;
use Grav\Common\Plugin;

class ColorButtonsPlugin extends Plugin
{
    /**
     * @return array
     */
    public static function getSubscribedEvents()
    {
        return [
            'onPluginsInitialized' => ['onPluginsInitialized', 0]
        ];
    }
    public function onPluginsInitialized()
    {
        /* Check if Admin-interface */
        if (!$this->isAdmin()) {
            return;
        }

            $this->enable([
                'onAdminTwigTemplatePaths' => ['onAdminTwigTemplatePaths', 0],
                'onAssetsInitialized' => ['onAssetsInitialized', 0]
            ]);

    }

    public function onAdminTwigTemplatePaths($event)
    {
        $event['paths']=array_merge($event['paths'], [__DIR__ . '/admin/templates']);
        return $event;
    }
    /**
     *
     */

    public function onAssetsInitialized()
    {
        $assets=$this->grav['assets'];
        $assets->addCss('user/plugins/color-buttons/admin/css/color-buttons.css', 10);
    }
}
