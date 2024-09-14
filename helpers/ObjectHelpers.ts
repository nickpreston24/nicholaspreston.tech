// From: https://medium.com/my-coding-life/extension-method-in-typescript-66d801488589

// interface String {
//     toTitleCase(text: string, delimiter: string): string
//     toPascalCase(word: string): string
// }
// interface Array<T> {
//     toAddPostfix(postFix: string): Array<T>;
// }

// Array.prototype.toAddPostfix = function (postFixStr: string) {
//     var _self = this as Array<string>;
//     return _self.map(a => `${a}${postFixStr}`)
// };

// String.prototype.toPascalCase = (word: string) =>
//     word.replace(/(\w)(\w*)/g, // split into word character groups
//         (group1, group2) =>
//             group1.toUpperCase() + group2.toLowerCase()) // make second group(s) uppercased

export const getKeyByValue: any = (instance: any, entryName: string) => Object.entries(instance).find(([, name]) => entryName === name);

export const toPascalCase = (word: string) =>
    word.replace(/(\w)(\w*)/g, // split into word character groups
        (group1, group2) =>
            group1.toUpperCase() + group2.toLowerCase()) // make second group(s) uppercased

// An adapter method that converts our dash-delimited status values to strings our Enums and Labels can recognize
export const toTitleCase = (text: string, delimiter: string = ' ') => {
    if (!text)
        throw new Error('Text cannot be null')
    let sentence = text.toLowerCase().split(delimiter)
    for (let i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1)
    }
    return sentence.join(' ')
}