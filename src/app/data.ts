export const builtInButtons = {
  cancel: {
    classes: 'cancel-button',
    secondary: true,
    text: 'Exit',
    type: 'cancel'
  },
  next: {
    classes: 'next-button',
    text: 'Next',
    type: 'next'
  },
  back: {
    classes: 'back-button',
    secondary: true,
    text: 'Back',
    type: 'back'
  }
};

export const defaultStepOptions = {
  classes: 'shepherd-theme-arrows custom-default-class',
  scrollTo: true,
  cancelIcon: {
    enabled: true
  }
};

export const steps = [
  {
    attachTo: {
      element: '.material-icons',
      on: 'bottom'
    },
    buttons: [
      builtInButtons.cancel,
      builtInButtons.next
    ],
    classes: 'custom-class-name-1 custom-class-name-2',
    id: 'intro',
    title: 'Innovapost Application Guide',
    text: `
          <p>
            Description ...
          </p>
        
          <p>
            Popper makes sure your steps never end up off screen or cropped by an
            overflow. Try resizing your browser to see what we mean.
          </p>`
  },
  {
    attachTo: {
      element: '.cli-documentation',
      on: 'bottom'
    },
    buttons: [
      builtInButtons.cancel,
      builtInButtons.back,
      builtInButtons.next
    ],
    classes: 'custom-class-name-1 custom-class-name-2',
    id: 'installation',
    title: 'Installation',
    text: 'Installation is simple, if you are using Ember-CLI, just install like any other addon.'
  },
  {
    attachTo: {
      element: '.angular-blog',
      on: 'bottom'
    },
    buttons: [
      builtInButtons.cancel,
      builtInButtons.back,
      builtInButtons.next
    ],
    classes: 'custom-class-name-1 custom-class-name-2',
    id: 'usage',
    title: 'Usage',
    text: 'To use the tour service, simply inject it into your application and use it like this example.'
  },
  {
    attachTo: {
      element: '.build-for-production',
      on: 'top'
    },
    buttons: [
      builtInButtons.cancel,
      builtInButtons.back,
      builtInButtons.next
    ],
    classes: 'custom-class-name-1 custom-class-name-2',
    id: 'modal',
    text: `
        <p>
          We implemented true modal functionality by disabling clicking of the rest of the page.
        </p>
        
        <p>
          If you would like to enable modal, simply do this.get('tour').set('modal', true).
        </p>`
  },
  {
    attachTo: {
      element: '.github-star-badge',
      on: 'top'
    },
    buttons: [
      builtInButtons.cancel,
      builtInButtons.back,
      builtInButtons.next
    ],
    classes: 'custom-class-name-1 custom-class-name-2',
    id: 'buttons',
    text: `For the common button types ("next", "back", "cancel", etc.), we implemented Ember actions
          that perform these actions on your tour automatically. To use them, simply include
          in the buttons array in each step.`
  },
  {
    buttons: [
      builtInButtons.cancel,
      builtInButtons.back
    ],
    id: 'noAttachTo',
    title: 'End',
    classes: 'custom-class-name-1 custom-class-name-2',
    text: 'If no attachTo is specified, the modal will appear in the center of the screen, as per the Shepherd docs.'
  }
];
