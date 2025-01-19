export type DataType = {
    word: string
    phonetic: string
    phonetics: PhoneticType[]
    meanings: MeaningType[]
    license: LicenseType
    sourceUrls: string[] 
}[]

export type PhoneticType = {
  text: string
  audio: string
  sourceUrl?: string
  license?: LicenseType
}

export type MeaningType = {
  partOfSpeech: "noun" | "verb" | string
  definitions: DefinitionType[]
  synonyms: string[]
  antonyms: string[]
}

export type DefinitionType = {
  definition: string
  synonyms: string[]
  antonyms: string[]
  example?: string
}

export type LicenseType = {
  name: string
  url: string
}


export const DATA: DataType = [
    {
      "word": "keyboard",
      "phonetic": "/ˈkiːbɔːd/",
      "phonetics": [
        {
          "text": "/ˈkiːbɔːd/",
          "audio": ""
        },
        {
          "text": "/ˈkiːbɔːd/",
          "audio": ""
        },
        {
          "text": "/ˈkibɔɹd/",
          "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3",
          "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=1755168",
          "license": {
            "name": "BY-SA 3.0",
            "url": "https://creativecommons.org/licenses/by-sa/3.0"
          }
        }
      ],
      "meanings": [
        {
          "partOfSpeech": "noun",
          "definitions": [
            {
              "definition": "(etc.) A set of keys used to operate a typewriter, computer etc.",
              "synonyms": [],
              "antonyms": []
            },
            {
              "definition": "A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.",
              "synonyms": [],
              "antonyms": []
            },
            {
              "definition": "A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.",
              "synonyms": [],
              "antonyms": []
            }
          ],
          "synonyms": [
            "electronic keyboard"
          ],
          "antonyms": []
        },
        {
          "partOfSpeech": "verb",
          "definitions": [
            {
              "definition": "To type on a computer keyboard.",
              "synonyms": [],
              "antonyms": [],
              "example": "Keyboarding is the part of this job I hate the most."
            }
          ],
          "synonyms": [],
          "antonyms": []
        }
      ],
      "license": {
        "name": "CC BY-SA 3.0",
        "url": "https://creativecommons.org/licenses/by-sa/3.0"
      },
      "sourceUrls": [
        "https://en.wiktionary.org/wiki/keyboard"
      ]
    }
  ]

const data2: DataType = [
  {
    "word": "knife",
    "phonetic": "/naɪf/",
    "phonetics": [
      {
        "text": "/naɪf/",
        "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/knife-uk.mp3",
        "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=9014196",
        "license": {
          "name": "BY 3.0 US",
          "url": "https://creativecommons.org/licenses/by/3.0/us"
        }
      },
      {
        "text": "/naɪf/",
        "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/knife-us.mp3",
        "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=269551"
      }
    ],
    "meanings": [
      {
        "partOfSpeech": "noun",
        "definitions": [
          {
            "definition": "A utensil or a tool designed for cutting, consisting of a flat piece of hard material, usually steel or other metal (the blade), usually sharpened on one edge, attached to a handle. The blade may be pointed for piercing.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "A weapon designed with the aforementioned specifications intended for slashing and/or stabbing and too short to be called a sword. A dagger.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "Any blade-like part in a tool or a machine designed for cutting, such as that of a chipper.",
            "synonyms": [],
            "antonyms": []
          }
        ],
        "synonyms": [],
        "antonyms": []
      },
      {
        "partOfSpeech": "verb",
        "definitions": [
          {
            "definition": "To cut with a knife.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "To use a knife to injure or kill by stabbing, slashing, or otherwise using the sharp edge of the knife as a weapon.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "To cut through as if with a knife.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "To betray, especially in the context of a political slate.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "To positively ignore, especially in order to denigrate. compare cut",
            "synonyms": [],
            "antonyms": []
          }
        ],
        "synonyms": [],
        "antonyms": []
      }
    ],
    "license": {
      "name": "CC BY-SA 3.0",
      "url": "https://creativecommons.org/licenses/by-sa/3.0"
    },
    "sourceUrls": [
      "https://en.wiktionary.org/wiki/knife"
    ]
  }
]

const data3: DataType = [
  {
    "word": "symbol",
    "phonetic": "/ˈsɪmbəl/",
    "phonetics": [
      {
        "text": "/ˈsɪmbəl/",
        "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/symbol-us.mp3",
        "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=1755228",
        "license": {
          "name": "BY-SA 3.0",
          "url": "https://creativecommons.org/licenses/by-sa/3.0"
        }
      }
    ],
    "meanings": [
      {
        "partOfSpeech": "noun",
        "definitions": [
          {
            "definition": "A character or glyph representing an idea, concept or object.",
            "synonyms": [],
            "antonyms": [],
            "example": "$ is the symbol for dollars in the US and some other countries."
          },
          {
            "definition": "A thing considered the embodiment of a concept or object.",
            "synonyms": [],
            "antonyms": [],
            "example": "The lion is the symbol of courage; the lamb is the symbol of meekness or patience."
          },
          {
            "definition": "A type of noun whereby the form refers to the same entity independently of the context; a symbol arbitrarily denotes a referent. See also icon and index.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "A summary of a dogmatic statement of faith.",
            "synonyms": [],
            "antonyms": [],
            "example": "The Apostles, Nicene Creed and the confessional books of Protestantism, such as the Augsburg Confession of Lutheranism are considered symbols."
          },
          {
            "definition": "The numerical expression which defines a plane's position relative to the assumed axes.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "That which is thrown into a common fund; hence, an appointed or accustomed duty.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "Share; allotment.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "An internal identifier used by a debugger to relate parts of the compiled program to the corresponding names in the source code.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "A signalling event on a communications channel; a signal that cannot be further divided into meaningful information.",
            "synonyms": [],
            "antonyms": []
          }
        ],
        "synonyms": [],
        "antonyms": []
      },
      {
        "partOfSpeech": "verb",
        "definitions": [
          {
            "definition": "To symbolize.",
            "synonyms": [],
            "antonyms": []
          }
        ],
        "synonyms": [],
        "antonyms": []
      }
    ],
    "license": {
      "name": "CC BY-SA 3.0",
      "url": "https://creativecommons.org/licenses/by-sa/3.0"
    },
    "sourceUrls": [
      "https://en.wiktionary.org/wiki/symbol"
    ]
  }
]

const data4: DataType = [
  {
    "word": "key",
    "phonetic": "/kiː/",
    "phonetics": [
      {
        "text": "/kiː/",
        "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/key-uk.mp3",
        "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=9022056",
        "license": {
          "name": "BY 3.0 US",
          "url": "https://creativecommons.org/licenses/by/3.0/us"
        }
      },
      {
        "text": "/ki/",
        "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/key-us.mp3",
        "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=876649",
        "license": {
          "name": "BY-SA 3.0",
          "url": "https://creativecommons.org/licenses/by-sa/3.0"
        }
      }
    ],
    "meanings": [
      {
        "partOfSpeech": "noun",
        "definitions": [
          {
            "definition": "An object designed to open and close a lock.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "An object designed to fit between two other objects (such as a shaft and a wheel) in a mechanism and maintain their relative orientation.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "A crucial step or requirement.",
            "synonyms": [],
            "antonyms": [],
            "example": "The key to solving this problem is persistence."
          },
          {
            "definition": "A guide explaining the symbols or terminology of a map or chart; a legend.",
            "synonyms": [],
            "antonyms": [],
            "example": "The key says that A stands for the accounting department."
          },
          {
            "definition": "A guide to the correct answers of a worksheet or test.",
            "synonyms": [],
            "antonyms": [],
            "example": "Some students cheated by using the answer key."
          },
          {
            "definition": "One of several small, usually square buttons on a typewriter or computer keyboard, mostly corresponding to text characters.",
            "synonyms": [],
            "antonyms": [],
            "example": "Press the Escape key."
          },
          {
            "definition": "In musical instruments, one of the valve levers used to select notes, such as a lever opening a hole on a woodwind.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "In instruments with a keyboard such as an organ or piano, one of the levers, or especially the exposed front end of it, which are depressed to cause a particular sound or note to be produced.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "The lowest note of a scale; keynote.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "In musical theory, the total melodic and harmonic relations, which exist between the tones of an ideal scale, major or minor; tonality.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "In musical theory and notation, the tonality centering in a given tone, or the several tones taken collectively, of a given scale, major or minor.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "In musical notation, a sign at the head of a staff indicating the musical key.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "The general pitch or tone of a sentence or utterance.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "A modification of an advertisement so as to target a particular group or demographic.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "An indehiscent, one-seeded fruit furnished with a wing, such as the fruit of the ash and maple; a samara.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "A manual electrical switching device primarily used for the transmission of Morse code.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "A piece of information (e.g. a passphrase) used to encode or decode a message or messages.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "A password restricting access to an IRC channel.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "In a relational database, a field used as an index into another table (not necessarily unique).",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "A value that uniquely identifies an entry in a container.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "The free-throw lane together with the circle surrounding the free-throw line, the free-throw lane having formerly been narrower, giving the area the shape of a skeleton key hole.",
            "synonyms": [],
            "antonyms": [],
            "example": "He shoots from the top of the key."
          },
          {
            "definition": "A series of logically organized groups of discriminating information which aims to allow the user to correctly identify a taxon.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "A piece of wood used as a wedge.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "The last board of a floor when laid down.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "A keystone.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "That part of the plastering which is forced through between the laths and holds the rest in place.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "A wooden support for a rail on the bullhead rail system.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "The degree of roughness, or retention ability of a surface to have applied a liquid such as paint, or glue.",
            "synonyms": [],
            "antonyms": [],
            "example": "The door panel should be sanded down carefully to provide a good key for the new paint."
          },
          {
            "definition": "The thirty-third card of the Lenormand deck.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "(print and film) The black ink layer, especially in relation to the three color layers of cyan, magenta, and yellow. See also CMYK.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "A color to be masked or made transparent.",
            "synonyms": [],
            "antonyms": []
          }
        ],
        "synonyms": [],
        "antonyms": []
      },
      {
        "partOfSpeech": "verb",
        "definitions": [
          {
            "definition": "To fit (a lock) with a key.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "To fit (pieces of a mechanical assembly) with a key to maintain the orientation between them.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "To mark or indicate with a symbol indicating membership in a class.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "(telegraphy and radio telegraphy) To depress (a telegraph key).",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "To operate (the transmitter switch of a two-way radio).",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "(more usually to key in) To enter (information) by typing on a keyboard or keypad.",
            "synonyms": [],
            "antonyms": [],
            "example": "Our instructor told us to key in our user IDs."
          },
          {
            "definition": "To vandalize (a car, etc.) by scratching with an implement such as a key.",
            "synonyms": [],
            "antonyms": [],
            "example": "He keyed the car that had taken his parking spot."
          },
          {
            "definition": "To link (as one might do with a key or legend).",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "To be identified as a certain taxon when using a key.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "To modify (an advertisement) so as to target a particular group or demographic.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "To attune to; to set at; to pitch.",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "To fasten or secure firmly; to fasten or tighten with keys or wedges.",
            "synonyms": [],
            "antonyms": []
          }
        ],
        "synonyms": [],
        "antonyms": []
      },
      {
        "partOfSpeech": "adjective",
        "definitions": [
          {
            "definition": "Indispensable, supremely important.",
            "synonyms": [],
            "antonyms": [],
            "example": "He is the key player on his soccer team."
          },
          {
            "definition": "Important, salient.",
            "synonyms": [],
            "antonyms": [],
            "example": "She makes several key points."
          }
        ],
        "synonyms": [],
        "antonyms": []
      }
    ],
    "license": {
      "name": "CC BY-SA 3.0",
      "url": "https://creativecommons.org/licenses/by-sa/3.0"
    },
    "sourceUrls": [
      "https://en.wiktionary.org/wiki/key"
    ]
  },
  {
    "word": "key",
    "phonetic": "/kiː/",
    "phonetics": [
      {
        "text": "/kiː/",
        "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/key-uk.mp3",
        "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=9022056",
        "license": {
          "name": "BY 3.0 US",
          "url": "https://creativecommons.org/licenses/by/3.0/us"
        }
      },
      {
        "text": "/ki/",
        "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/key-us.mp3",
        "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=876649",
        "license": {
          "name": "BY-SA 3.0",
          "url": "https://creativecommons.org/licenses/by-sa/3.0"
        }
      }
    ],
    "meanings": [
      {
        "partOfSpeech": "noun",
        "definitions": [
          {
            "definition": "One of a string of small islands.",
            "synonyms": [],
            "antonyms": [],
            "example": "the Florida Keys"
          }
        ],
        "synonyms": [],
        "antonyms": []
      }
    ],
    "license": {
      "name": "CC BY-SA 3.0",
      "url": "https://creativecommons.org/licenses/by-sa/3.0"
    },
    "sourceUrls": [
      "https://en.wiktionary.org/wiki/key"
    ]
  },
  {
    "word": "key",
    "phonetic": "/kiː/",
    "phonetics": [
      {
        "text": "/kiː/",
        "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/key-uk.mp3",
        "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=9022056",
        "license": {
          "name": "BY 3.0 US",
          "url": "https://creativecommons.org/licenses/by/3.0/us"
        }
      },
      {
        "text": "/ki/",
        "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/key-us.mp3",
        "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=876649",
        "license": {
          "name": "BY-SA 3.0",
          "url": "https://creativecommons.org/licenses/by-sa/3.0"
        }
      }
    ],
    "meanings": [
      {
        "partOfSpeech": "noun",
        "definitions": [
          {
            "definition": "A stone or concrete structure on navigable water used for loading and unloading vessels; a wharf.",
            "synonyms": [],
            "antonyms": []
          }
        ],
        "synonyms": [],
        "antonyms": []
      }
    ],
    "license": {
      "name": "CC BY-SA 3.0",
      "url": "https://creativecommons.org/licenses/by-sa/3.0"
    },
    "sourceUrls": [
      "https://en.wiktionary.org/wiki/key",
      "https://en.wiktionary.org/wiki/quay"
    ]
  },
  {
    "word": "key",
    "phonetic": "/kiː/",
    "phonetics": [
      {
        "text": "/kiː/",
        "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/key-uk.mp3",
        "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=9022056",
        "license": {
          "name": "BY 3.0 US",
          "url": "https://creativecommons.org/licenses/by/3.0/us"
        }
      },
      {
        "text": "/ki/",
        "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/key-us.mp3",
        "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=876649",
        "license": {
          "name": "BY-SA 3.0",
          "url": "https://creativecommons.org/licenses/by-sa/3.0"
        }
      }
    ],
    "meanings": [
      {
        "partOfSpeech": "noun",
        "definitions": [
          {
            "definition": "In the International System of Units, the base unit of mass; conceived of as the mass of one litre of water, but now defined by taking the fixed numerical value of the Planck constant h to be 6.626 070 15 × 10-34 when expressed in units of kg⋅m2⋅s−1. Symbol: kg",
            "synonyms": [],
            "antonyms": []
          },
          {
            "definition": "The unit of weight such that a one-kilogram mass is also a one-kilogram weight.",
            "synonyms": [],
            "antonyms": []
          }
        ],
        "synonyms": [
          "kg",
          "kilo"
        ],
        "antonyms": []
      }
    ],
    "license": {
      "name": "CC BY-SA 3.0",
      "url": "https://creativecommons.org/licenses/by-sa/3.0"
    },
    "sourceUrls": [
      "https://en.wiktionary.org/wiki/key",
      "https://en.wiktionary.org/wiki/kilogram"
    ]
  }
]