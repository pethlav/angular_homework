const statePrefix = '[LUNCH MACHINE] ';

export class IncrementUpvotes {
  static readonly type = statePrefix + 'Increment Upvotes';

  constructor(public payload: string) {
  }
}

export class AddLunch {
  static readonly type = statePrefix + 'Add';

  constructor(public payload: string) {
  }
}

export class RemoveLunch {
  static readonly type = statePrefix + 'Remove Lunch';

  constructor(public payload: string) {
  }
}

export class ResetUpvotes {
  static readonly type = statePrefix + 'Reset Upvotes';

  constructor() {
  }
}
