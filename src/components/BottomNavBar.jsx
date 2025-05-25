import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navItems = [
  { to: '/home', icon: '🏠', label: 'Home' },
  { to: '/', icon: '📊', label: 'Stats' },
  { to: '/map', icon: '🗺️', label: 'Map' },
  { to: '/weekly', icon: '⚙️', label: 'Weekly' },
  { to: '/aqi-info', icon: '👤', label: 'Info' },
];

export default function BottomNavBar() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t bg-background shadow z-50 flex justify-around py-3">
      {navItems.map((item) => {
        const isActive = location.pathname === item.to;

        return (
          <NavLink key={item.to} to={item.to} className="flex flex-col items-center text-xs gap-1">
            <Button
              variant="ghost"
              size="lg"
              className={cn(
                'text-2xl p-3 rounded-full',
                isActive ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {item.icon}
            </Button>
            <span
              className={cn(
                'text-sm font-medium',
                isActive ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {item.label}
            </span>
          </NavLink>
        );
      })}
    </nav>
  );
}
