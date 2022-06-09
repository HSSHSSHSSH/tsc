import type { Equal, Expect, NotAny } from "@type-challenges/utils";
import type HelloWord from "./template.ts";
type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>];
