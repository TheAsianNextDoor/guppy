"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.year = exports.weekday = exports.timezone = exports.timestamp = exports.second = exports.month = exports.minute = exports.millisecond = exports.hour = exports.hammertime = exports.date = exports.ampm = exports.zip = exports.street = exports.state = exports.postcode = exports.postal = exports.phone = exports.locale = exports.country = exports.city = exports.areacode = exports.address = exports.url = exports.ip = exports.email = exports.company = exports.color = exports.suffix = exports.ssn = exports.prefix = exports.name = exports.last = exports.gender = exports.first = exports.birthday = exports.age = exports.word = exports.syllable = exports.sentence = exports.paragraph = exports.string = exports.natural = exports.letter = exports.integer = exports.floating = exports.character = exports.falsy = exports.bool = exports.chance = void 0;
exports.weighted = exports.unique = exports.hash = exports.guid = exports.coin = exports.exp_year = exports.exp_month = exports.exp = exports.euro = exports.dollar = exports.currency = void 0;
/* eslint-disable @typescript-eslint/naming-convention */
const chance_1 = __importDefault(require("chance"));
exports.chance = new chance_1.default();
//basic
const bool = (opt) => () => exports.chance.bool(opt);
exports.bool = bool;
const falsy = (opt) => () => exports.chance.falsy(opt);
exports.falsy = falsy;
const character = (opt) => () => exports.chance.character(opt);
exports.character = character;
const floating = (opts) => () => exports.chance.floating(opts);
exports.floating = floating;
const integer = (opts) => () => exports.chance.integer(opts);
exports.integer = integer;
const letter = (opts) => () => exports.chance.letter(opts);
exports.letter = letter;
const natural = (opts) => () => exports.chance.natural(opts);
exports.natural = natural;
const string = (opts) => () => exports.chance.string(opts);
exports.string = string;
// text
const paragraph = (opts) => () => exports.chance.paragraph(opts);
exports.paragraph = paragraph;
const sentence = (opts) => () => exports.chance.sentence(opts);
exports.sentence = sentence;
const syllable = (opts) => () => exports.chance.syllable(opts);
exports.syllable = syllable;
const word = (opts) => () => exports.chance.word(opts);
exports.word = word;
// person
const age = (opts) => () => exports.chance.age(opts);
exports.age = age;
const birthday = (opts) => () => exports.chance.birthday(opts);
exports.birthday = birthday;
const first = (opts) => () => exports.chance.first(opts);
exports.first = first;
const gender = () => () => exports.chance.gender();
exports.gender = gender;
const last = (opts) => () => exports.chance.last(opts);
exports.last = last;
const name = (opts) => () => exports.chance.name(opts);
exports.name = name;
const prefix = (opts) => () => exports.chance.prefix(opts);
exports.prefix = prefix;
const ssn = (opts) => () => exports.chance.ssn(opts);
exports.ssn = ssn;
const suffix = (opts) => () => exports.chance.suffix(opts);
exports.suffix = suffix;
// web
const color = (opts) => () => exports.chance.color(opts);
exports.color = color;
const company = () => () => exports.chance.company();
exports.company = company;
const email = (opts) => () => exports.chance.email(opts);
exports.email = email;
const ip = () => () => exports.chance.ip();
exports.ip = ip;
const url = (opts) => () => exports.chance.url(opts);
exports.url = url;
// location
const address = (opts) => () => exports.chance.address(opts);
exports.address = address;
const areacode = () => () => exports.chance.areacode();
exports.areacode = areacode;
const city = () => () => exports.chance.city();
exports.city = city;
const country = (opts) => () => exports.chance.country(opts);
exports.country = country;
const locale = (opts) => () => exports.chance.locale(opts);
exports.locale = locale;
const phone = (opts) => () => exports.chance.phone(opts);
exports.phone = phone;
const postal = () => () => exports.chance.postal();
exports.postal = postal;
const postcode = () => () => exports.chance.postcode();
exports.postcode = postcode;
const state = (opts) => () => exports.chance.state(opts);
exports.state = state;
const street = (opts) => () => exports.chance.street(opts);
exports.street = street;
const zip = (opts) => () => exports.chance.zip(opts);
exports.zip = zip;
// time
const ampm = () => () => exports.chance.ampm();
exports.ampm = ampm;
const date = () => () => exports.chance.date();
exports.date = date;
const hammertime = () => () => exports.chance.hammertime();
exports.hammertime = hammertime;
const hour = (opts) => () => exports.chance.hour(opts);
exports.hour = hour;
const millisecond = () => () => exports.chance.millisecond();
exports.millisecond = millisecond;
const minute = () => () => exports.chance.minute();
exports.minute = minute;
const month = () => () => exports.chance.month();
exports.month = month;
const second = () => () => exports.chance.second();
exports.second = second;
const timestamp = () => () => exports.chance.timestamp();
exports.timestamp = timestamp;
const timezone = () => () => exports.chance.timezone();
exports.timezone = timezone;
const weekday = (opts) => () => exports.chance.weekday(opts);
exports.weekday = weekday;
const year = (opts) => () => exports.chance.year(opts);
exports.year = year;
// finance
const currency = () => () => exports.chance.currency();
exports.currency = currency;
const dollar = (opts) => () => exports.chance.dollar(opts);
exports.dollar = dollar;
const euro = (opts) => () => exports.chance.euro(opts);
exports.euro = euro;
const exp = () => () => exports.chance.exp();
exports.exp = exp;
const exp_month = (opts) => () => exports.chance.exp_month(opts);
exports.exp_month = exp_month;
const exp_year = (opts) => () => exports.chance.exp_year(opts);
exports.exp_year = exp_year;
// misc
const coin = () => () => exports.chance.coin();
exports.coin = coin;
const guid = (options) => () => exports.chance.guid(options);
exports.guid = guid;
const hash = (opts) => () => exports.chance.hash(opts);
exports.hash = hash;
const unique = (generator, count) => () => exports.chance.unique(generator, count);
exports.unique = unique;
const weighted = (values, weights) => () => exports.chance.weighted(values, weights);
exports.weighted = weighted;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NoYW5jZVdyYXBwZXIvY2hhbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSx5REFBeUQ7QUFDekQsb0RBQTRCO0FBRWYsUUFBQSxNQUFNLEdBQUcsSUFBSSxnQkFBTSxFQUFFLENBQUM7QUFFbkMsT0FBTztBQUNBLE1BQU0sSUFBSSxHQUFHLENBQUMsR0FBd0MsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUE1RSxRQUFBLElBQUksUUFBd0U7QUFDbEYsTUFBTSxLQUFLLEdBQUcsQ0FBQyxHQUFzQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQTVFLFFBQUEsS0FBSyxTQUF1RTtBQUNsRixNQUFNLFNBQVMsR0FBRyxDQUFDLEdBQW1ELEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7QUFBakcsUUFBQSxTQUFTLGFBQXdGO0FBQ3ZHLE1BQU0sUUFBUSxHQUFHLENBQUMsSUFBaUMsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUE5RSxRQUFBLFFBQVEsWUFBc0U7QUFDcEYsTUFBTSxPQUFPLEdBQUcsQ0FBQyxJQUFpRCxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQTVGLFFBQUEsT0FBTyxXQUFxRjtBQUNsRyxNQUFNLE1BQU0sR0FBRyxDQUFDLElBQWlDLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFB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