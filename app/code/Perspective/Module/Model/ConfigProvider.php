<?php

namespace Perspective\Module\Model;

use Magento\Framework\View\LayoutInterface;

class ConfigProvider implements \Magento\Checkout\Model\ConfigProviderInterface
{
    public function __construct(
        protected LayoutInterface $layout
    ) {}
  /**
   * @inheritDoc
   */
  public function getConfig()
  {
    return [
        'cmsCustomBlock' => $this->layout->createBlock('Magento\Cms\Block\Block')->setBlockId('checkout_custom')->toHtml()
    ];
  }
}
