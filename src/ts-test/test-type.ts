interface IFnCall<IRoot> {
  <T>(fn: () => IRoot, age: T): string
}

const foo: IFnCall<string> = function (fn, age) {
  return `${name}-${age}`
}

foo<number>(() => 'aaa', 18)

foo(() => '111', false)

export {}
