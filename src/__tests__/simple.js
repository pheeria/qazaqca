import test from "ava"
import {transliterate} from "../transliterator.js"

test("Test simple cases", t => {
    t.is(transliterate("сапар"), "sapar")
})

test("ROFLs from the previous versions", t => {
    t.not(transliterate("сәбіз"), "saebiz")
    t.not(transliterate("нәби"), "naebi")
})

test("Bleeding eyes", t => {
    t.is(transliterate("ыңғайсыз"), "yƞğaisyz")
    t.is(transliterate("уайымдама"), "uaiymdama")
})
