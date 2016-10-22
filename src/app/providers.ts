import { OpaqueToken } from '@angular/core';

export let LOOKUP_LISTS = new OpaqueToken('LookupLists');

export let lookupLists = {
    mediums: ['Movies', 'Series']
};
