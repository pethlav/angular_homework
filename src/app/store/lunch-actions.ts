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
