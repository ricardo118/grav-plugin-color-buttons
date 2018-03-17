<?php

namespace Grav\Plugin\Shortcodes;

use Grav\Common\Utils;
use Thunder\Shortcode\Shortcode\ShortcodeInterface;


class ColorButtonsShortcode extends Shortcode
{
    public function init()
    {
        $this->shortcode->getHandlers()->add('cb', function (ShortcodeInterface $sc) {
            $color=$sc->getParameter('color', $sc->getBbCode());
            $class=$sc->getParameter('class', $sc->getBbCode());
            if (isset($color)) {
                return '<span class="'.$color.'">' . $sc->getContent() . '</span>';
            }else {
                if (isset($class)) {
                    return '<span class="' . $class . '">' . $sc->getContent() . '</span>';
                }
                return $sc->getContent();
            }
        });
    }
}
