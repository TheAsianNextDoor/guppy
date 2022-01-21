/* eslint-disable @typescript-eslint/naming-convention */
import Chance from 'chance';

export const chance = new Chance();

//basic
export const bool = (opt?: { likelihood: number } | undefined) => () => chance.bool(opt);
export const falsy = (opt?:  Chance.FalsyOptions | undefined) => () => chance.falsy(opt);
export const character = (opt?:  Partial<Chance.CharacterOptions> | undefined) => () => chance.character(opt);
export const floating = (opts?: Chance.Options | undefined) => () => chance.floating(opts);
export const integer = (opts?: Partial<Chance.IntegerOptions> | undefined) => () => chance.integer(opts);
export const letter = (opts?: Chance.Options | undefined) => () => chance.letter(opts);
export const natural = (opts?: Chance.Options | undefined) => () => chance.natural(opts);
export const string = (opts?: Partial<Chance.StringOptions> | undefined) => () => chance.string(opts);

// text
export const paragraph = (opts?: Chance.Options | undefined) => () => chance.paragraph(opts);
export const sentence = (opts?: Partial<Chance.SentenceOptions> | undefined) => () => chance.sentence(opts);
export const syllable = (opts?: Chance.Options | undefined) => () => chance.syllable(opts);
export const word = (opts?: Partial<Chance.WordOptions> | undefined) => () => chance.word(opts);

// person
export const age = (opts?: Chance.Options | undefined) => () => chance.age(opts);
export const birthday = (opts?: Chance.Options | undefined) => () => chance.birthday(opts);
export const first = (opts?: Partial<Chance.FirstNameOptions> | undefined) => () => chance.first(opts);
export const gender = () => () => chance.gender();
export const last = (opts?: Chance.LastNameOptions | undefined) => () => chance.last(opts);
export const name = (opts?: Partial<Chance.NameOptions> | undefined) => () => chance.name(opts);
export const prefix = (opts?: Partial<Chance.PrefixOptions> | undefined) => () => chance.prefix(opts);
export const ssn = (opts?: Chance.Options | undefined) => () => chance.ssn(opts);
export const suffix = (opts?: Chance.SuffixOptions | undefined) => () => chance.suffix(opts);

// web
export const color = (opts?: Chance.Options | undefined) => () => chance.color(opts);
export const company = () => () => chance.company();
export const email = (opts?: Partial<Chance.EmailOptions> | undefined) => () => chance.email(opts);
export const ip = () => () => chance.ip();
export const url = (opts?: Partial<Chance.UrlOptions> | undefined) => () => chance.url(opts);

// location
export const address = (opts?: Chance.Options | undefined) => () => chance.address(opts);
export const areacode = () => () => chance.areacode();
export const city = () => () => chance.city();
export const country = (opts?: Chance.Options | undefined) => () => chance.country(opts);
export const locale = (opts?: { region: true } | undefined) => () => chance.locale(opts);
export const phone = (opts?: Chance.Options | undefined) => () => chance.phone(opts);
export const postal = () => () => chance.postal();
export const postcode = () => () => chance.postcode();
export const state = (opts?: Chance.Options | undefined) => () => chance.state(opts);
export const street = (opts?: Chance.Options | undefined) => () => chance.street(opts);
export const zip = (opts?: Chance.Options | undefined) => () => chance.zip(opts);

// time
export const ampm = () => () => chance.ampm();
export const date = () => () => chance.date();
export const hammertime = () => () => chance.hammertime();
export const hour = (opts?: Chance.Options | undefined) => () => chance.hour(opts);
export const millisecond = () => () => chance.millisecond();
export const minute = () => () => chance.minute();
export const month = () => () => chance.month();
export const second = () => () => chance.second();
export const timestamp = () => () => chance.timestamp();
export const timezone = () => () => chance.timezone();
export const weekday = (opts: Chance.Options) => () => chance.weekday(opts);
export const year = (opts?: Chance.Options | undefined) => () => chance.year(opts);

// finance
export const currency = () => () => chance.currency();
export const dollar = (opts?: Chance.Options | undefined) => () => chance.dollar(opts);
export const euro = (opts?: Chance.Options | undefined) => () => chance.euro(opts);
export const exp = () => () => chance.exp();
export const exp_month = (opts?: Chance.Options | undefined) => () => chance.exp_month(opts);
export const exp_year = (opts?: Chance.Options | undefined) => () => chance.exp_year(opts);

// misc
export const coin = () => () => chance.coin();
export const guid = (options?: { version: 4 | 5 } | undefined) => () => chance.guid(options);
export const hash = (opts?: Chance.Options | undefined) => () => chance.hash(opts);
export const unique = (generator: () => unknown, count: number) => () => chance.unique(generator, count);
export const weighted = (values: any[], weights: number[]) => () => chance.weighted(values, weights);
