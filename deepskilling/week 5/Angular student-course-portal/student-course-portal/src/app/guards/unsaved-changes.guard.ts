import { CanDeactivateFn } from '@angular/router';

export interface CanComponentDeactivate {
  canDeactivate: () => boolean;
}

// H7: CanDeactivate — prevents accidental loss of dirty form data
export const unsavedChangesGuard: CanDeactivateFn<CanComponentDeactivate> = (component) => {
  if (component.canDeactivate && !component.canDeactivate()) {
    return window.confirm('You have unsaved changes. Leave?');
  }
  return true;
};
