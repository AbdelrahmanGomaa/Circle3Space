import { manifests as advancedManifests } from './advanced/manifests.js';
import { manifests as sectionManifests } from './section/manifests.js';
import { manifests as structureManifests } from './structure/manifests.js';
import { manifests as welcomeDashboardManifests } from './welcome/manifests.js';
export const manifests = [
    ...advancedManifests,
    ...sectionManifests,
    ...structureManifests,
    ...welcomeDashboardManifests,
];
