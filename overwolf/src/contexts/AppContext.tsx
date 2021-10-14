import React from 'react';
import { load, simpleStorageDefaultSettings, SimpleStorageSettings } from '../logic/storage';

export type MinimapWindowType = 'desktop' | 'inGame';

export type AppContextSettings = SimpleStorageSettings & {
    iconSettings: IconSettings | undefined;
}

export interface IAppContext {
    settings: AppContextSettings;
    update: (delta: Partial<AppContextSettings>) => void;
    toggleFrameMenu: () => void;
    gameRunning: boolean;
    isTransparentSurface: boolean | undefined;
    minimapWindowType: MinimapWindowType | undefined;
}

export function loadAppContextSettings(): AppContextSettings {
    return {
        showHeader: load('showHeader'),
        showToolbar: load('showToolbar'),
        transparentHeader: load('transparentHeader'),
        transparentToolbar: load('transparentToolbar'),
        showText: load('showText'),
        iconScale: load('iconScale'),
        zoomLevel: load('zoomLevel'),
        opacity: load('opacity'),
        shape: load('shape'),
        iconSettings: undefined,
    };
}

export const defaultAppContext: IAppContext = {
    settings: {
        ...simpleStorageDefaultSettings,
        iconSettings: undefined,
    },
    update: () => { },
    toggleFrameMenu: () => { },
    gameRunning: false,
    isTransparentSurface: undefined,
    minimapWindowType: undefined,
};

export const AppContext = React.createContext<IAppContext>(defaultAppContext);
