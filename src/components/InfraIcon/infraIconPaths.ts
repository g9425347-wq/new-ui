/**
 * Stroke geometry for every `iconKey` in the infrastructure catalogue.
 *
 * Each entry is the inner markup of a 24x24 `viewBox` drawn with
 * `fill="none"`, `stroke="currentColor"` and `stroke-width="2"` — the same
 * contract the library's other SVG assets use, so an icon inherits colour from
 * whatever renders it. Keeping the markup as plain strings (rather than JSX)
 * lets one definition serve both the DOM component and the data-URI form the
 * Cytoscape canvas needs, which cannot mount React nodes.
 */
export const INFRA_ICON_PATHS: Record<string, string> = {
	// — compute —————————————————————————————————————————————
	Server: '<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01M6 18h.01"/>',
	Cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/>',
	Boxes: '<rect x="8" y="2" width="8" height="8" rx="1"/><rect x="2" y="14" width="8" height="8" rx="1"/><rect x="14" y="14" width="8" height="8" rx="1"/><path d="M12 10v2M6 14v-2h12v2"/>',
	FolderArchive:
		'<path d="M3 7a2 2 0 0 1 2-2h3.9l1.6 2H19a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M12 10v1M12 12.5v1M12 15v1"/>',
	Zap: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
	Laptop: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M2 20h20"/>',
	Smartphone:
		'<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
	Spline: '<circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><path d="M5 17A12 12 0 0 1 17 5"/>',

	// — network —————————————————————————————————————————————
	Route: '<circle cx="6" cy="19" r="3"/><circle cx="18" cy="5" r="3"/><path d="M9 19h6a3 3 0 0 0 3-3V8"/>',
	Network:
		'<rect x="9" y="2" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="16" y="16" width="6" height="6" rx="1"/><path d="M12 8v4M5 16v-4h14v4"/>',
	Wall: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9.3h18M3 14.7h18M9 4v5.3M15 9.3v5.4M9 14.7V20"/>',
	DoorOpen:
		'<path d="M2 21h20"/><path d="M5 21V5a1 1 0 0 1 .8-1l8-2A1 1 0 0 1 15 3v18"/><path d="M15 8h3a1 1 0 0 1 1 1v12"/><path d="M11.6 12h.01"/>',
	GitFork:
		'<circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="12" cy="18" r="3"/><path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9M12 12v3"/>',
	Link2: '<path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 0 1 0 10h-2"/><path d="M8 12h8"/>',
	Wifi: '<path d="M1.4 9a16 16 0 0 1 21.2 0"/><path d="M5 12.6a11 11 0 0 1 14 0"/><path d="M8.5 16.1a6 6 0 0 1 7 0"/><path d="M12 20h.01"/>',
	Globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',

	// — cloud network —————————————————————————————————————————
	Cloud: '<path d="M17.5 19H7a5 5 0 0 1-.5-9.97 6 6 0 0 1 11.4 1.6A4.2 4.2 0 0 1 17.5 19z"/>',
	Grid2x2:
		'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 3v18M3 12h18"/>',
	Signpost:
		'<path d="M12 2v3M12 15v7"/><path d="M4 6h13l3 3-3 3H4z"/><path d="M20 15h-13l-3-3"/>',
	ShieldCheck:
		'<path d="M12 2l8 3v6c0 5-3.4 9.3-8 11-4.6-1.7-8-6-8-11V5z"/><path d="M9 12l2 2 4-4"/>',
	ListChecks:
		'<path d="M3 6l1.5 1.5L7 5"/><path d="M3 13l1.5 1.5L7 12"/><path d="M3 20l1.5 1.5L7 19"/><path d="M11 6h10M11 13h10M11 20h10"/>',

	// — identity ————————————————————————————————————————————
	KeyRound:
		'<circle cx="7.5" cy="15.5" r="4.5"/><path d="M10.8 12.2 20 3"/><path d="M17 6l3 3M15 8l3 3"/>',
	UserRound: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
	ScrollText:
		'<rect x="4" y="3" width="14" height="18" rx="2"/><path d="M8 8h6M8 12h6M8 16h4"/><path d="M18 7h2v12a2 2 0 0 1-2 2"/>',

	// — messaging ————————————————————————————————————————————
	Inbox: '<path d="M3 12h5l2 3h4l2-3h5"/><path d="M4.5 6.5 3 12v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6l-1.5-5.5A2 2 0 0 0 17.6 5H6.4a2 2 0 0 0-1.9 1.5z"/>',
	Megaphone:
		'<path d="M3 11v2a2 2 0 0 0 2 2h2l9 5V4L7 9H5a2 2 0 0 0-2 2z"/><path d="M19 9a3 3 0 0 1 0 6"/>',

	// — storage & data ——————————————————————————————————————
	Database:
		'<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>',
	TableProperties:
		'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M10 4v16M10 10h11M10 15h11"/>',
	SearchCode:
		'<circle cx="10.5" cy="10.5" r="7.5"/><path d="M16 16l5 5"/><path d="M9 8l-2.5 2.5L9 13"/><path d="M12.5 8 15 10.5 12.5 13"/>',
	HardDriveDownload:
		'<path d="M12 2v8"/><path d="M8.5 7.5 12 11l3.5-3.5"/><rect x="2" y="14" width="20" height="6" rx="2"/><path d="M6 17h.01M10 17h.01"/>',
	FolderNetwork:
		'<path d="M3 6a2 2 0 0 1 2-2h3.5L10 6h9a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M12 13v3M6 19v-3h12v3"/><rect x="4" y="19" width="4" height="3" rx="1"/><rect x="10" y="19" width="4" height="3" rx="1"/><rect x="16" y="19" width="4" height="3" rx="1"/>',
	Layers: '<path d="M12 2l9 5-9 5-9-5z"/><path d="M3 12l9 5 9-5"/><path d="M3 17l9 5 9-5"/>',

	// — fallback ————————————————————————————————————————————
	Activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
};

/** The shape drawn when an `iconKey` has no entry — never returns undefined. */
export const FALLBACK_ICON_KEY = "Activity";

export const infraIconBody = (iconKey: string): string =>
	INFRA_ICON_PATHS[iconKey] ?? INFRA_ICON_PATHS[FALLBACK_ICON_KEY];
