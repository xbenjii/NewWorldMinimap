export const simpleStorageDefaultSettings = {
    showHeader: true,
    showToolbar: false,
    transparentHeader: true,
    transparentToolbar: true,
    showText: false,
    iconScale: 1.5,
    zoomLevel: 2,
    opacity: 1,
    shape: 'none',
};

export type SimpleStorageSettings = typeof simpleStorageDefaultSettings;

export function store<TKey extends keyof SimpleStorageSettings>(key: TKey, value: SimpleStorageSettings[TKey]) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function load<TKey extends keyof SimpleStorageSettings>(key: TKey) {
    const retrieved = localStorage.getItem(key);

    if (retrieved) {
        return JSON.parse(retrieved);
    }

    return simpleStorageDefaultSettings[key];
}

function storeUntyped<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
}

function loadUntyped<T>(key: string, defaultValue: T) {
    const retrieved = localStorage.getItem(key);

    if (retrieved) {
        return JSON.parse(retrieved);
    }

    return defaultValue;
}

export function storeIconCategory(name: string, value: boolean) {
    const key = 'icon.category.' + name + '.visible';
    return storeUntyped(key, value);
}

export function storeIconType(name: string, value: boolean) {
    const key = 'icon.type.' + name + '.visible';
    return storeUntyped(key, value);
}

export function loadIconCategory(name: string) {
    const key = 'icon.category.' + name + '.visible';
    return loadUntyped(key, name !== 'npc' && name !== 'pois') as boolean;
}

export function loadIconType(name: string) {
    const key = 'icon.type.' + name + '.visible';
    return loadUntyped(key, true) as boolean;
}
