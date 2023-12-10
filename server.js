const express = require('express')
const app = express()
const PORT = 8000

const characters = {
    'bmo':{
        'name': 'BMO',
        'age': 1006,
        'species': 'MO',
        'occupation': 'Video Game Console System/Computer/VCR',
        'voiceActor': 'Niki Yang',
    },
    'finn':{
        'name': 'Finn Mertens / Finn the Human',
        'age': 12,
        'species': 'Human',
        'occupation': 'Hero',
        'voiceActor': 'Jeremy Shada',
    },
    'ice king':{
        'name': 'Simon Petrikov',
        'age': 47,
        'species': 'Ice Wizard / Human',
        'occupation': 'Monarch of the Ice Kingdom',
        'voiceActor': 'Tom Kenny',
    },
    'jake':{
        'name': 'Jacob / Jake The Dog',
        'age': 28,
        'species': 'Dog / Shape-shifter',
        'occupation': 'Criminal turned Hero',
        'voiceActor': 'John DiMaggio',
    },
    'lady rainicorn':{
        'name': 'Lady Rainicorn',
        'age': 'unknown',
        'species': 'Rainicorn',
        'occupation': 'Royal Steed of Princess Bubblegum',
        'voiceActor': 'Niki Yang',
    },
    'lumpy space princess':{
        'name': 'Lumpy Space Princess',
        'age': 15,
        'species': 'Lumps Anti-Elemental',
        'occupation': 'Queen of Lumpy Space',
        'voiceActor': 'Pendleton Ward',
    },
    'marceline':{
        'name': 'Marceline Abadeer',
        'age': 1000,
        'species': 'Vampire / Demon',
        'occupation': 'Vampire Queen / Musician',
        'voiceActor': 'Olivia Olson',
    },
    'princess bubblegum':{
        'name': 'Bonnibel "Bonnie" Bubblegum',
        'age': 18,
        'species': 'Candy Elemental',
        'occupation': 'Ruler of the Candy Kingdom',
        'voiceActor': 'Hynden Walch',
    },
    'unknown':{
        'name': 'unknown',
        'age': 0,
        'species': 'unknown',
        'occupation': 'unknown',
        'voiceActor': 'unknown',
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req,res)=>{
    const characterName = req.params.name.toLowerCase()
    
    if(characters[characterName]){
        res.json(characters[characterName])
    }else{
        res.json(characters['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! YASSS QUEEN!`)
})