
// import { Extension } from "@tiptap/react";
// import type { Command, CommandProps } from "@tiptap/core";
// import "@tiptap/extension-text-style";

// declare module "@tiptap/core" {
//     interface Commands<Returntype> {
//         fontSize: {
//             setFontSize: (size: string) => Returntype
//             unsetFontSize: () => Returntype
//     }
//   }
// }



// export const FontSizeExtension = Extension.create({
//     name: "fontSize",
//     addOptions() {
//         return {
//             types: ["textStyles"],
//         }
//     },
//     addGlobalAttributes() {
//         return [ 
//             {
//                 types: this.options.types,
//                   attributes: {
//                      fontSize: {
//                         default: null,
//                         parseHTML: element => element.style.fontSize,
//                         renderHTML: attributes => {
//                             if (!attributes.fontSize) {
//                                 return{};
//                              }
                          
//                           return { style: 'font-size: ${attributes.fontSize}'}
//                 }
//                }
//     }
//     } 
//     ]
//     },
//     addCommands() {
//         return {
//             setFontSize: (fontSize: string): Command => ({ chain }: CommandProps ) =>  {
//                 return chain()
//                 .setMark("textStyle", { fontSize })
//                 .run();
//             },
//             unsetFontSize: (): Command => ({ chain }: CommandProps ) =>  {
//                 return chain()
//                 .setMark("textStyle", { fontSize: null })
//                 .removeEmptyTextStyle()
//                 .run()
//             },
//         }
//     },
// });