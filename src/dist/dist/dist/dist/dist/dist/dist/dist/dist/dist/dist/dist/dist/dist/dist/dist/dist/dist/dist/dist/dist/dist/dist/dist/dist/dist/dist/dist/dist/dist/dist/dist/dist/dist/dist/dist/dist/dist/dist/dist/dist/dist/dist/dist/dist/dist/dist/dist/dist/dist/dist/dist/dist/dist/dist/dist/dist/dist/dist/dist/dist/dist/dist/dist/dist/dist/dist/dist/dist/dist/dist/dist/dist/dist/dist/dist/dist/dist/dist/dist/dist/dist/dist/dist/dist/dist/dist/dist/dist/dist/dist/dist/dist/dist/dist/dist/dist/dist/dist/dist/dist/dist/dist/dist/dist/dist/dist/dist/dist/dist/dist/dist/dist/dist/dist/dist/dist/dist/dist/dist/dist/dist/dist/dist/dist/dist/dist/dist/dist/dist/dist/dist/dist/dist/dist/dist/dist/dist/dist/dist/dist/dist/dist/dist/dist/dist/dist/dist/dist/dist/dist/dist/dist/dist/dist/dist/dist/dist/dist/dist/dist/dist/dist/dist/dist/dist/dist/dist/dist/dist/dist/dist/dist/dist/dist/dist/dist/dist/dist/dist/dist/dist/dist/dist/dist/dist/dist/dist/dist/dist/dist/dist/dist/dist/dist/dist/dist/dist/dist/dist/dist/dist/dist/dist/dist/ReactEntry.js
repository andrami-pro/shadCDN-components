import React from 'react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Badge } from './components/ui/badge';
import { Switch } from './components/ui/switch';
import "./styles/globals.css";
export default function ReactEntry({
  content
}) {
  const {
    componentType,
    label,
    variant,
    size,
    placeholder,
    value,
    badgeText
  } = content;
  switch (componentType) {
    case 'input':
      return /*#__PURE__*/React.createElement(Input, {
        placeholder: placeholder,
        defaultValue: value
      });
    case 'badge':
      return /*#__PURE__*/React.createElement(Badge, {
        variant: variant
      }, badgeText || "Badge");
    case 'switch':
      return /*#__PURE__*/React.createElement(Switch, {
        checked: value
      });
    case 'button':
    default:
      return /*#__PURE__*/React.createElement(Button, {
        variant: variant,
        size: size
      }, label || "Button");
  }
}