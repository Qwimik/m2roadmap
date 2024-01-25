<?php

namespace Perspective\Module\Model;
// Створення класу ViewModel
class ViewModel implements \Magento\Framework\View\Element\Block\ArgumentInterface
{
    public function getTitle()
    {
        return 'I am Class ViewModel (getTitle)';
    }
}
