// TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.

// When a value is of type any, you can access any properties of it (which will in turn be of type any), call it like a function, assign it to (or from) a value of any type, or pretty much anything else that’s syntactically legal:

// noImplicitAny
// When you don’t specify a type, and TypeScript can’t infer it from context, the compiler will typically default to any.

// You usually want to #### avoid #### this, though, because any isn’t type-checked. Use the compiler flag noImplicitAny to flag any implicit any as an error.
