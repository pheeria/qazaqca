import test from "ava"
import {transliterate} from "../transliterator.js"

test("Test simple cases", t => {
    t.is(transliterate("сапар"), "sapar")
})
