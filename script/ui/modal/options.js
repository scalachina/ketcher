function opts() {
    return [
        { name: 'showAtomIds',
        label: 'Show atom Ids',
        type: 'boolean',
        defaultValue: false,
        tab: 'debug' },
        { name: 'showBondIds',
        label: 'Show bonds Ids',
        type: 'boolean',
        defaultValue: false,
        tab: 'debug' },
        { name: 'showHalfBondIds',
        label: 'Show half bonds Ids',
        type: 'boolean',
        defaultValue: false,
        tab: 'debug' },
        { name: 'showLoopIds',
        label: 'Show loop Ids',
        type: 'boolean',
        defaultValue: false,
        tab: 'debug' },
        { name: 'hideImplicitHydrogen',
        label: 'Hide implicit hydrogen',
        type: 'boolean',
        defaultValue: false,
        tab: 'render' },
        { name: 'hideTerminalLabels',
        label: 'Hide terminal carbon labels',
        type: 'boolean',
        defaultValue: false,
        tab: 'render' },
        { name: 'showValenceWarnings',
        label: 'Show valence warnings',
        type: 'boolean',
        defaultValue: true,
        tab: 'render' },
        { name: 'atomColoring',
        label: 'Atom coloring',
        type: 'boolean',
        defaultValue: false,
        tab: 'render' },
        { name: 'hideChiralFlag',
        label: 'Do not show the Chiral flag',
        type: 'boolean',
        defaultValue: false,
        tab: 'render' },

        { name: 'lineWidth',
        label: 'Line width',
        type: 'number',
        defaultValue: 2,
        values: [2, 4, 6], //?
        tab: 'render' },
        { name: 'margin',
        label: 'Margin',
        type: 'number',
        defaultValue: 0.1,
        values: [0.1, 0.2], //?
        tab: 'render' },
        { name: 'labelFontSize',
        label: 'Label font size',
        type: 'number',
        defaultValue: 13,
        values: [10, 13, 100], //?
        tab: 'render' },

		{ name: 'fontFamily',
		label: 'Font',
		type: 'string',
		defaultValue: "Arial",
		tab: 'render' }
    ];
}

module.exports = opts;
