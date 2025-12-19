import React from 'react'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Badge } from './components/ui/badge'
import { Switch } from './components/ui/switch'
import "./styles/globals.css"

export default function ReactEntry({ content }) {
    const { componentType, label, variant, size, placeholder, value, badgeText } = content

    switch (componentType) {
        case 'input':
            return (
                <Input
                    placeholder={placeholder}
                    defaultValue={value}
                />
            )
        case 'badge':
            return (
                <Badge variant={variant}>
                    {badgeText || "Badge"}
                </Badge>
            )
        case 'switch':
            return <Switch checked={value} />
        case 'button':
        default:
            return (
                <Button variant={variant} size={size}>
                    {label || "Button"}
                </Button>
            )
    }
}
