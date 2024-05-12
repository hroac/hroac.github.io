let state = {
    questions: {},
    phase: {
        "FFFF": 0,
    },
    types: {
        'Fight': { 'ENTP': 0, 'ESTP': 0, 'ENTJ': 0, 'ESTJ': 0, },
        'Freeze': { 'INTJ': 0, 'ISTJ': 0, 'INTP': 0, 'ISTP': 0, },
        'Fawn': { 'ISFJ': 0, 'INFJ': 0, 'ESFJ': 0, 'ENFJ': 0, },
        'Flight': { 'ESFP': 0, 'ENFP': 0, 'ISFP': 0, 'INFP': 0, },
    },
    answers: {}
}

const input = `
        1.	Imagine you're walking alone at night, and suddenly someone approaches you aggressively, demanding your belongings. In this situation, would you:
        a) Stand your ground and refuse to comply, ready to defend yourself if necessary  
        b) Attempt to run away from the attacker  
        c) Feel frozen in fear, unable to react or respond  
        d) Quickly hand over your belongings to avoid escalating the situation 
        2.	You're in a meeting at work, and a colleague starts criticizing your ideas in front of everyone. Do you: 
        a) Counter their criticism with strong arguments and defend your ideas assertively  
        b) Feel the urge to leave the meeting or find a reason to excuse yourself  
        c) Find yourself unable to respond, feeling overwhelmed by the criticism  
        d) Try to downplay the conflict and maintain a positive atmosphere in the meeting 
        3.	Picture yourself driving on a busy highway when suddenly another car swerves into your lane, nearly causing an accident. Do you: 
        a) React with anger and frustration, honking your horn and gesturing at the other driver  
        b) Swerve to avoid the other car and then try to distance yourself from the situation  
        c) Freeze momentarily, gripping the steering wheel tightly, unsure how to react  
        d) Try to de-escalate the situation by slowing down and giving the other driver space 
        4.	You're at a social gathering, and someone starts making rude comments about your appearance. How do you respond? 
        a) Fire back with witty comebacks and assert yourself confidently  
        b) Excuse yourself from the conversation and find a distraction elsewhere  
        c) Feel speechless and uncomfortable, unable to respond to the comments  
        d) Laugh it off and try to redirect the conversation to avoid tension 
        5.	Imagine you're hiking in the woods when suddenly you encounter a wild animal blocking your path. Do you: 
        a) Make yourself appear larger and louder to intimidate the animal and scare it away 
        b) Slowly back away from the animal while keeping a close eye on its movements  
        c) Freeze in place, hoping the animal will lose interest and leave you alone  
        d) Speak softly and avoid sudden movements to avoid alarming the animal 
        6.	You're at a party, and someone spills a drink on you accidentally. How do you react? 
        a) Express your frustration and demand an apology from the person responsible  
        b) Quickly excuse yourself to clean up and change your clothes  
        c) Stand still, feeling embarrassed and unsure how to react to the situation  
        d) Brush it off with a smile, reassuring the other person that it's okay and accidents happen 
        7.	While walking in a crowded area, you accidentally bump into someone, causing them to drop their belongings. What's your immediate reaction? 
        a) Engage in a verbal confrontation, blaming the other person for being in your way  
        b) Feel embarrassed and quickly walk away from the situation  
        c) Freeze momentarily, unsure how to react to the unexpected collision  
        d) Apologize and offer to help pick up their things, taking responsibility for the accident 
        8.	You're at a family gathering, and tensions start rising between two relatives. How do you intervene? 
        a) Step in assertively to diffuse the situation and offer solutions to resolve the conflict  
        b) Excuse yourself from the gathering, feeling uncomfortable with the conflict unfolding  
        c) Feel overwhelmed and unsure how to respond, wishing you could disappear from the situation  
        d) Try to change the subject or redirect the attention elsewhere to avoid further conflict 
        9.	Imagine you're in a crowded elevator when it suddenly stops between floors, leaving everyone trapped inside. How do you react? 
        a) Take charge of the situation, suggesting solutions and keeping everyone calm  
        b) Feel a surge of panic and try to pry the doors open or call for help  
        c) Freeze in place, feeling helpless and paralyzed by the unexpected situation  
        d) Comfort others and try to maintain a positive atmosphere while waiting for help to arrive 
        10.	You're in a team meeting, and your supervisor criticizes your performance in front of your colleagues. How do you respond? 
        a) Defend your actions confidently and provide explanations for your decisions  
        b) Feel the urge to leave the meeting or distance yourself emotionally from the criticism  
        c) Become speechless and feel your confidence waver under the scrutiny  
        d) Attempt to address your supervisor's concerns diplomatically and seek ways to improve 
        #
        1.	You're out with friends when someone insults you in front of the group. How do you respond? 
        a) Retaliate with a sharp comeback, asserting your dignity  
        b) Brush off the insult and redirect the conversation  
        c) Confront the person directly, demanding an apology  
        d) Ignore the insult and focus on enjoying the rest of your time with your friends 
        2.	While driving, another driver cuts you off aggressively. How do you react? 
        a) Speed up to pass them and give them a disapproving glare  
        b) Honk your horn and gesture angrily at the other driver  
        c) Stay calm and maintain a safe distance, avoiding escalation  
        d) Slow down and let them pass, prioritizing safety over confrontation 
        3.	You're in a team meeting, and someone keeps interrupting you while you're speaking. What do you do? 
        a) Assertively ask them to let you finish before they speak  
        b) Speak louder to drown out their interruptions  
        c) Address their interruptions directly, asking for their respect  
        d) Maintain your composure and find a diplomatic way to regain control of the conversation 
        4.	During a group project, a team member isn't pulling their weight, causing delays. How do you handle it? 
        a) Challenge them to step up and meet their responsibilities  
        b) Offer practical solutions to overcome the obstacles and keep the project on track  
        c) Confront them directly about their lack of contribution  
        d) Take charge and delegate tasks to ensure progress 
        5.	At a social gathering, someone starts spreading rumors about you. What's your reaction? 
        a) Ignore the rumors and focus on spending time with supportive friends  
        b) Take steps to distance yourself from the situation and minimize its impact  
        c) Confront the person spreading rumors and set the record straight  
        d) Address the rumors publicly and assertively defend your reputation 
        6.	You're participating in a competitive sport, and your opponent starts trash-talking you. How do you respond? 
        a) Use their trash talk as motivation to perform even better  
        b) Respond with confident banter of your own, showing you're not intimidated  
        c) Focus on your game and let your performance speak for itself  
        d) Maintain your focus and ignore their attempts to distract you 
        7.	During a heated debate, someone challenges your beliefs. How do you react? 
        a) Present logical arguments to defend your beliefs passionately  
        b) Engage in a spirited debate, enjoying the intellectual challenge  
        c) Take control of the debate and guide the conversation toward your viewpoint  
        d) Remain steadfast in your beliefs but listen respectfully to opposing viewpoints 
        8.	You're in a leadership position, and your team is facing a crisis. How do you lead them through it? 
        a) Encourage innovative thinking and adaptability to find creative solutions  
        b) Inspire your team with your determination and willingness to tackle challenges head-on  
        c) Take decisive action and provide clear direction to navigate the crisis  
        d) Lead by example, demonstrating confidence and resilience in the face of adversity 
        9.	While attending a public event, you witness an injustice unfolding. What's your immediate response? 
        a) Speak out against the injustice and advocate for change  
        b) Step in to assist the victim and ensure their safety  
        c) Intervene directly to address the injustice and defend the victim  
        d) Take charge of the situation and rally others to support your cause 
        10.	You're working on a project with a tight deadline, and your team is falling behind. How do you motivate them to catch up? 
        a) Energize the team with your enthusiasm and confidence in their abilities  
        b) Encourage collaboration and teamwork to overcome obstacles and meet the deadline  
        c) Set clear goals and provide incentives for meeting deadlines  
        d) Lead by example, showing your dedication and work ethic 
        #
        1.	You're in a group discussion, and someone presents an idea that contradicts your own. How do you react? 
        a) Remain silent and listen to the discussion without expressing your opinion  
        b) Preferring to observe the situation and analyze all perspectives  
        c) Feel overwhelmed by the conflicting viewpoints and struggle to contribute  
        d) Stay quiet but mentally dissect the idea, evaluating its merits and flaws 
        2.	You're at a party, and someone you don't know approaches you to strike up a conversation. What's your response? 
        a) Politely excuse yourself from the conversation, preferring solitude  
        b) Listen attentively but contribute little to the conversation, feeling reserved 
        c) Politely engage in small talk while feeling uncomfortable with the interaction  
        d) Keep to yourself and observe the party from a distance, feeling hesitant to mingle  
        3.	During a team meeting, your supervisor asks for your input on a new project. How do you respond? 
        a) Feel overwhelmed by the attention and prefer to blend into the background  
        b) Provide concise and practical suggestions, focusing on the task at hand 
        c) Feel unsure of what to say and struggle to articulate your thoughts  
        d) Analyze the project silently before offering a well-thought-out response  
        4.	You're in a group setting, and the conversation becomes loud and chaotic. How do you handle it? 
        a) Feel mentally overwhelmed and withdraw into your thoughts  
        b) Quietly observe the chaos, feeling uncomfortable with the noise  
        c) Find it hard to concentrate and feel the urge to leave the situation  
        d) Stay composed but mentally detach from the conversation, preferring calmness 
        5.	At a social gathering, someone asks you a personal question that makes you uncomfortable. How do you react? 
        a) Politely deflect the question and steer the conversation in a different direction  
        b) Withdraw from the conversation subtly, feeling uncomfortable with the intrusion  
        c) Freeze momentarily, unsure how to respond to the personal inquiry  
        d) Answer the question briefly but remain guarded about sharing personal details 
        6.	During a group activity, your team members are debating different approaches. How do you contribute? 
        a) Feel overwhelmed by the conflicting opinions and struggle to voice your thoughts  
        b) Contribute cautiously, preferring to offer insights when necessary 
        c) Stay silent and observe the discussion, analyzing the merits of each approach  
        d) Offer practical suggestions based on your observations, focusing on efficiency  
        7.	You're working on a project, and your coworker keeps asking for your opinion. How do you respond? 
        a) Freeze momentarily, unsure how to respond to the constant inquiries  
        b) Provide concise feedback when prompted, preferring to work independently 
        c) Feel uncomfortable with the attention and struggle to express your thoughts  
        d) Offer practical insights based on your observations, focusing on detail  
        8.	At a family gathering, someone brings up a sensitive topic that triggers unpleasant memories for you. What's your reaction? 
        a) Politely excuse yourself from the conversation, needing time to process your emotions  
        b) Listen quietly but feel uncomfortable discussing the topic, preferring to avoid it  
        c) Freeze momentarily, unsure how to respond to the emotional trigger  
        d) Change the subject smoothly to steer the conversation away from the sensitive topic 
        9.	You're attending a lecture, and the speaker asks for audience participation. How do you react? 
        a) Feel uncomfortable with the attention and prefer to remain silent  
        b) Listen attentively but feel hesitant to participate actively  
        c) Freeze momentarily, unsure how to contribute to the discussion  
        d) Offer insightful comments when prompted, preferring to speak thoughtfully 
        10.	During a team-building exercise, your group is tasked with a problem-solving activity. How do you approach it? 
        a) Feel overwhelmed by the task and struggle to participate actively  
        b) Contribute cautiously, preferring to observe the group dynamics before engaging 
        c) Analyze the problem silently before offering strategic solutions  
        d) Offer practical suggestions based on your observations and experiences 
        #
        1.	You're at a family gathering, and two relatives start arguing loudly. How do you intervene? 
        a) Feel overwhelmed by the tension and withdraw from the situation  
        b) Freeze momentarily, unsure how to react to the conflict 
        c) Offer support to both parties and try to calm the situation  
        d) Try to mediate the conflict and find common ground  
        2.	While working on a group project, a team member suggests an idea that you disagree with. How do you respond? 
        a) Feel hesitant to speak up and defer to the group's decision  
        b) Freeze momentarily, unsure how to express your disagreement 
        c) Try to find a compromise that incorporates elements of their idea 
        d) Politely acknowledge their idea and offer constructive feedback  
        3.	At a social gathering, someone you've just met starts sharing personal problems with you. How do you react? 
        a) Feel overwhelmed by their emotions and struggle to respond  
        b) Freeze momentarily, unsure how to handle the situation 
        c) Comfort them and try to alleviate their distress  
        d) Listen attentively and offer empathy and advice  
        4.	During a team meeting, your coworker criticizes your work in front of everyone. How do you handle it?  
        a) Feel hurt by the criticism but try to hide your emotions  
        b) Freeze momentarily, feeling embarrassed and unsure how to respond 
        c) Address their concerns diplomatically and seek to understand their perspective 
        d) Try to diffuse the tension and maintain a positive atmosphere  
        5.	You're at a social event, and someone you don't know well compliments your outfit. How do you react? 
        a) Feel uncomfortable with the attention and downplay the compliment  
        b) Freeze momentarily, unsure how to respond to the unexpected praise 
        c) Compliment them in return and try to make a connection  
        d) Thank them graciously and engage them in conversation  
        6.	While out with friends, one of them suggests doing something that makes you uncomfortable. How do you handle it? 
        a) Feel torn between your discomfort and wanting to please your friends  
        b) Freeze momentarily, unsure how to navigate the situation 
        c) Go along with their suggestion to avoid conflict  
        d) Voice your concerns and suggest an alternative activity  
        7.	You're in a group conversation, and someone makes a joke at your expense. How do you react? 
        a) Feel hurt by the joke but try to hide your emotions to avoid conflict  
        b) Freeze momentarily, unsure how to respond to the embarrassment 
        c) Join in on the laughter to avoid appearing sensitive  
        d) Laugh it off and make a self-deprecating remark to diffuse the tension  
        8.	During a meeting at work, your supervisor asks for volunteers to take on extra tasks. How do you respond?  
        a) Feel torn between wanting to help and feeling overwhelmed by your workload  
        b) Freeze momentarily, unsure how to balance your own needs with the request 
        c) Volunteer to assist with the tasks to show your commitment 
        d) Offer to help out willingly, even if it means taking on more work  
        9.	You're at a social gathering, and someone starts bragging about their accomplishments. How do you react? 
        a) Feel uncomfortable with the boasting but try to remain polite  
        b) Freeze momentarily, unsure how to respond to the self-promotion 
        c) Offer words of encouragement and praise to boost their confidence  
        d) Listen attentively and show genuine interest in their achievements  
        10.	You're in a group discussion, and someone dominates the conversation, leaving little room for others to speak. How do you handle it? 
        a) Feel frustrated by the lack of opportunity to speak but hesitate to interrupt  
        b) Freeze momentarily, unsure how to assert yourself in the conversation 
        c) Listen patiently and wait for an opportunity to contribute  
        d) Politely interject and encourage others to share their thoughts  
        
        #
        1.	You're at a crowded party, and you start feeling overwhelmed by the noise and crowd. What's your immediate reaction? 
        a) Find a quiet corner to recharge and collect your thoughts  
        b) Politely excuse yourself from the party and leave early  
        c) Freeze momentarily, feeling paralyzed by the overwhelming environment  
        d) Attempt to blend into the crowd and become less noticeable 
        2.	While attending a work conference, you realize you've forgotten an important document for your presentation. How do you handle it? 
        a) Improvise and deliver the presentation without the document  
        b) Feel overwhelmed by the mistake and consider skipping the presentation  
        c) Freeze momentarily, unsure how to proceed without the necessary document  
        d) Try to find a quick solution, such as emailing the document to yourself 
        3.	You're on a date with someone who starts talking about serious topics like marriage and children. How do you respond? 
        a) Change the subject to something lighter and more casual  
        b) Feel overwhelmed by the intensity of the conversation and consider ending the date early  
        c) Freeze momentarily, unsure how to navigate the sudden shift in conversation  
        d) Politely listen but feel uncomfortable discussing such personal topics 
        4.	During a team meeting, your supervisor assigns you a challenging task that you feel unprepared for. What do you do? 
        a) Accept the task enthusiastically and trust in your ability to figure it out as you go  
        b) Feel overwhelmed by the assignment and consider asking to be reassigned  
        c) Freeze momentarily, feeling paralyzed by the pressure to perform  
        d) Take a moment to gather your thoughts and come up with a plan to tackle the task 
        5.	You're at a social event, and someone you don't know well starts asking you personal questions. How do you react? 
        a) Engage in polite small talk but avoid revealing too much personal information  
        b) Feel overwhelmed by the intrusion and excuse yourself from the conversation  
        c) Freeze momentarily, feeling uncomfortable with the personal questions  
        d) Politely deflect the questions and steer the conversation to safer topics 
        6.	While walking alone at night, you hear footsteps behind you and start feeling anxious. What's your immediate reaction? 
        a) Increase your pace and try to distance yourself from the source of the noise  
        b) Feel overwhelmed by fear and consider calling a friend for reassurance  
        c) Freeze momentarily, feeling paralyzed by the uncertainty of the situation  
        d) Try to remain calm and assess the situation before taking action 
        7.	You're in a group conversation, and someone brings up a controversial topic that you'd rather avoid. How do you respond? 
        a) Change the subject to something less controversial and more lighthearted  
        b) Feel overwhelmed by the tension and consider leaving the conversation  
        c) Freeze momentarily, unsure how to navigate the potential conflict  
        d) Politely express your discomfort with the topic and suggest moving on 
        8.	While at work, you receive a challenging email from a client requesting urgent assistance. How do you react? 
        a) Dive into the task immediately, trusting in your ability to handle the situation  
        b) Feel overwhelmed by the pressure and consider avoiding the email for a while  
        c) Freeze momentarily, feeling unsure how to respond to the client's request  
        d) Take a moment to compose yourself before drafting a thoughtful response 
        9.	You're in a crowded elevator when it suddenly stops between floors, leaving everyone trapped inside. How do you react? 
        a) Try to remain calm and reassure others that help will arrive soon  
        b) Feel overwhelmed by claustrophobia and consider pressing the emergency button  
        c) Freeze momentarily, feeling paralyzed by the fear of being trapped  
        d) Take charge of the situation and try to find a solution to get the elevator moving again 
        10.	You're at a party, and someone starts arguing loudly with another guest. How do you respond? 
        a) Feel uncomfortable with the conflict and try to defuse the situation with humor  
        b) Feel overwhelmed by the tension and consider leaving the party early  
        c) Freeze momentarily, feeling unsure how to react to the confrontation  
        d) Politely excuse yourself from the area and find a quieter space at the party 
        `

window.onload = start()


function update(key, value) {
    console.log(state, key, value)
    state[key] = value
}

function fill(num) {
    const grid = document.querySelector('.grid')
    for (let i = 0; i < num; i++) {
        grid.append(genPlus())
    }
}

function genPlus() {
    var plus = genComponent('plusBox', 'div', '<div class="lineUp"></div><div class="lineSide"></div>')
    return plus
}

function start() {
    fill(360)

    var content = document.querySelector('.content');
    var explanation = `
    This is the Trauma Response Personality Indicator (TRPI) test developed based on the 4 trauma responses: Fight, Flight, Fawn, and Freeze. 
    It has 20 questions, 10 to determine which trauma response fits you best and 10 to determine which type of brain you have.
    According to this theory the Myers-Briggs types can be divided into 4 categories, see this link for more info: https://imgur.com/a/Y57r9nY
    `
    var context = genComponent('context title', 'div', explanation)
    var start = genComponent('start', 'button', '<p>Start!</p>', '', {
        ['onclick']: 'next()'
    })
    content.appendChild(context);

    content.appendChild(start);
}



function next() {
    genQuestions();
    var content = document.querySelector('.content')
    var nextButton = content.querySelector('.start')
    var explanation = content.querySelector('.context')
    removeComponent(content, nextButton)
    removeComponent(content, explanation)

    var gender = genComponent('title', 'div', 'Are you a man or a woman?')
    var genders = ['Man', 'Woman', 'Private'].map(opt => {
        return genComponent('option', 'button', opt, '', {
            ['onclick']: 'selectOption(innerHTML)'
        })
    })

    //nextQuestion();

    var options = genComponent('btn-group', 'div', '', '', {}, genders)
    var question = genComponent('question', 'div', '', '', {}, [gender, options])
    content.appendChild(question)
}

function genQuestions() {
    update("questions", parser(input))
}

function genQuestion(question, answers) {
    var opts = Object.values(answers).map(opt => {
        return genComponent('option', 'button', opt, '', {
            ['onclick']: 'selectOption(innerHTML)'
        })
    })
    var title = genComponent('title', 'div', question)
    var options = genComponent('btn-group', 'div', '', '', {}, opts)
    var qstn = genComponent('question', 'div', '', '', {}, [title, options])

    return qstn
}

function nextQuestion() {
    var phase = Object.keys(state.phase)[0]
    var num = state.phase[phase]
    var type = '';


    console.log(phase)
    if (phase == 'FFFF' && state.phase[phase] == 10) {
        console.log(state)

        var options = { 'Fight': 0, 'Freeze': 0, 'Fawn': 0, 'Flight': 0, }

        if (state.gender !== 'Private') {

            if (state.gender == 'Man') {
                options['Fight'] = 3
                options['Freeze'] = 3
            }

            if (state.gender == 'Woman') {
                options['Fawn'] = 3
                options['Flight'] = 3
            }
        }
        var mode = '';
        Object.values(state.answers['FFFF']).forEach(answer => {
            var char = answer.trimStart().slice(0, 1)
            console.log(char)
            if (char == 'a') {
                options['Fight'] = options['Fight'] + 1
            }
            if (char == 'b') {
                options['Flight'] = options['Flight'] + 1
            }
            if (char == 'c') {
                options['Freeze'] = options['Freeze'] + 1
            }
            if (char == 'd') {
                options['Fawn'] = options['Fawn'] + 1
            }

        })

        let count = 0;


        Object.entries(options).forEach(([key, value]) => {
            if (value > count) {
                count = value;
                mode = key;
            }
        });

        state.phase = {
            [mode]: 0
        }
        phase = mode;
        num = 0

    }

    if (phase != 'FFFF' && state.phase[phase] == 10) {
        var options = state.types[phase]
        var type1 = Object.keys(state.types[phase])[0]
        var type2 = Object.keys(state.types[phase])[1]
        var type3 = Object.keys(state.types[phase])[2]
        var type4 = Object.keys(state.types[phase])[3]


        Object.values(state.answers[phase]).forEach(answer => {
            var char = answer.trimStart().slice(0, 1)
            console.log(char)
            if (char == 'a') {
                options[type1] = options[type1] + 1
            }
            if (char == 'b') {
                options[type2] = options[type2] + 1
            }
            if (char == 'c') {
                options[type3] = options[type3] + 1
            }
            if (char == 'd') {
                options[type4] = options[type4] + 1
            }
        })

        let count = 0;


        Object.entries(options).forEach(([key, value]) => {
            if (value > count) {
                count = value;
                type = key;
            }
        });
    }

    var content = document.querySelector('.content')
    var docQuestion = content.querySelector('.question')
    if (!type) {
        var question = Object.keys(state.questions[phase])[num];
        var answers = Object.values(state.questions[phase])[num]

        var question = genQuestion(question, answers);

        replaceComponent(content, docQuestion, question)
    } else {

        var prefix = genComponent('prefix', 'div', `Congratulations you are an`)

        var col = Object.keys(state.types[phase]).indexOf(type)
        var fourSides = Object.values(state.types).map(val => Object.keys(val)[col]).map(val => {
            var mode = Object.entries(state.types)
                .map(value => [value[0], Object.keys(value[1])])
                .find(value => value[1].includes(val))[0]

            var line = genComponent(`line ${mode} ${val == type ? 'primary' : ''}`, 'div', val)
            return line;
        })
        var answer = genComponent('answer', 'div')
        answer.appendChild(prefix)
        fourSides.forEach(side => {
            answer.appendChild(side)
        })

        replaceComponent(content, docQuestion, answer)
        save({
            answers: state.answers,
            gender: state.gender,
            types: state.types
        })
    }

}

function selectOption(option) {
    console.log(option)
    var phase = Object.keys(state.phase)[0]
    var num = state.phase[phase]

    if (option == 'Man' || option == 'Woman' || option == 'Private') {
        update('gender', option)
    }

    if (!state.answers[phase]) {
        state.answers[phase] = {}
    }


    state.phase[phase] = state.phase[phase] + 1
    state.answers[phase][Object.keys(state.questions[phase])[num]] = option
    nextQuestion();
}

function guid() {
    const cryptoObj = window.crypto || window.msCrypto; // for IE11
    if (!cryptoObj) {
        console.error('Crypto API not available');
        return null;
    }

    const randomArray = new Uint8Array(16);
    cryptoObj.getRandomValues(randomArray);

    randomArray[6] = (randomArray[6] & 0x0f) | 0x40; // Version 4
    randomArray[8] = (randomArray[8] & 0x3f) | 0x80; // Variant bits

    let guid = '';
    for (let i = 0; i < 16; i++) {
        guid += (i === 4 || i === 6 || i === 8 || i === 10) ? '-' : '';
        guid += (randomArray[i] < 16 ? '0' : '') + randomArray[i].toString(16);
    }

    return guid.toLowerCase(); // Convert to lowercase as GUIDs are typically represented in lowercase
};

async function save(state) {
    const apiKey = '$2a$10$q3P7Zn7sUJLykm7PHc2d4.zvCgVdfmt8tVVK38jEdNC947RlZgoOG'; // Your JSONBin.io API key
    const url = 'https://api.jsonbin.io/v3/b'; // JSONBin.io base URL for creating bins

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': apiKey
            },
            body: JSON.stringify({
                [guid()]: {...state, date: new Date().toISOString() }
            })
        });

        if (!response.ok) {
            throw new Error('Failed to create bin');
        }

        const responseData = await response.json();
        console.log('Bin created successfully:', responseData);

        return responseData;
    } catch (error) {
        console.error('Error creating bin:', error);
        throw error;
    }
}