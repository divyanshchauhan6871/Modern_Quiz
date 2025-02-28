import React from "react";

function Question() {
  const questions = [
    {
      ques: "Events Related to Ramayan happened in which Yuga?",
      sol: { a: "Sat Yuga", b: "Treta Yuga", c: "Dwapar Yuga", d: "Kali Yuga" },
      correct: "2",
    },
    {
      ques: "Maharaj Dashratha Had how many wife?",
      sol: { a: "2", b: "4", c: "3", d: "5" },
      correct: "3",
    },
    {
      ques: "Who was first wife of Maharaj Dahsratha?",
      sol: {
        a: "Mata Kausalya",
        b: "Mata Kaikeyi",
        c: "Mata Sumitra",
        d: "None",
      },
      correct: "1",
    },
    {
      ques: "Who was second wife of Maharaj Dahsratha?",
      sol: {
        a: "Mata Kausalya",
        b: "Mata Kaikeyi",
        c: "Mata Sumitra",
        d: "None",
      },
      correct: "2",
    },
    {
      ques: "Who was third wife of Maharaj Dahsratha?",
      sol: {
        a: "Mata Kausalya",
        b: "Mata Kaikeyi",
        c: "Mata Sumitra",
        d: "None",
      },
      correct: "3",
    },
    {
      ques: "what was the name of family servant that made the Mata Kaikeyi mind diverted?",
      sol: { a: "Bimla", b: "Kamla", c: "Kiran", d: "Manthara" },
      correct: "4",
    },
    {
      ques: "Lord Ram was Avtar of whom?",
      sol: {
        a: "Lord Vishnu",
        b: "Lord Shankar",
        c: "Both",
        d: "None of them",
      },
      correct: "1",
    },
    {
      ques: "Maharaj Dashratha had how many son",
      sol: { a: "2", b: "3", c: "4", d: "5" },
      correct: "3",
    },
    {
      ques: "Which Rani of Maharaj Dashratha had 2 sons?",
      sol: {
        a: "Mata Kausalya",
        b: "Mata Kaikeyi",
        c: "Mata Sumitra",
        d: "None",
      },
      correct: "3",
    },
    {
      ques: "Among which pair who was brothers by same mother?",
      sol: {
        a: "Lord Ram and Lord Lakshmana",
        b: "Lord Ram and Lord Bharat",
        c: "Lord Bharat and Lord Shatrughna",
        d: "Lord Lakshmana and Lord Shatrughna",
      },
      correct: "4",
    },
    {
      ques: "Whom took all four brothers to gurukul?",
      sol: {
        a: "Maharishi Bhardwaj",
        b: "Maharishi Agast",
        c: "Maharishi valmiki",
        d: "Maharishi Vashishta",
      },
      correct: "4",
    },
    {
      ques: "Who is aradhya bhagwan of Lord Ram?",
      sol: {
        a: "Lord Shankar",
        b: "Lord Vishnu",
        c: "Lord Brahma",
        d: "none of these",
      },
      correct: "1",
    },
    {
      ques: "Lord Ram came to make people free from whom rule?",
      sol: {
        a: "Kartavirya Arjuna",
        b: "Dashanan",
        c: "Hiranyaksh",
        d: "Hiranyakahsyap",
      },
      correct: "2 ",
    },
    {
      ques: "For how many years Lord Ram needed to stay in forest?",
      sol: { a: "12", b: "15", c: "14", d: "13" },
      correct: "3",
    },
    {
      ques: "Whom went to forest along with Lord Ram?",
      sol: {
        a: "Mata Sita",
        b: "Lord Lakshmana",
        c: "Both",
        d: "None of them",
      },
      correct: "3",
    },
    {
      ques: "Name of wife of Lord Lakshmana",
      sol: {
        a: "Mata Urmila",
        b: "Mata Mandvi",
        c: "Mata Shrutkirti",
        d: "None",
      },
      correct: "1",
    },
    {
      ques: "Name of wife of Lord Bharat",
      sol: {
        a: "Mata Urmila",
        b: "Mata Mandvi",
        c: "Mata Shrutkirti",
        d: "None",
      },
      correct: "2",
    },
    {
      ques: "Name of wife of Lord Shatrughna",
      sol: {
        a: "Mata Urmila",
        b: "Mata Mandvi",
        c: "Mata Shrutkirti",
        d: "None",
      },
      correct: "3",
    },
    {
      ques: "Where did Incident of attacking Shurpanakha in Ramayana happened?",
      sol: {
        a: "Panchvati",
        b: "Near ganaga",
        c: "Siddhnath Ashram",
        d: "Chitrakoot",
      },
      correct: "4",
    },
    {
      ques: "Mata Shabri Waited for Lord Ram where?",
      sol: {
        a: "Chitrakoot",
        b: "Pampa Saovar",
        c: "Matang Rishi ke Ashram",
        d: "Drona giri parvat",
      },
      correct: "2",
    },
    {
      ques: "From where Ravana took Mata Sita away.?",
      sol: {
        a: "Dandaka van",
        b: "Chitrakoot",
        c: "Panchvati",
        d: "Kishkindha",
      },
      correct: "1",
    },
    {
      ques: "At the time of Shurpanakha Kand whose kingdom was there in Dandak van?",
      sol: { a: "Khar aur Dushan", b: "Ravan", c: "Dashanan", d: "Kumbhkaran" },
      correct: "1",
    },
    {
      ques: "What was the animal in whose form rakshash came to divert Lord Ram?",
      sol: {
        a: "Swarn Heeran ",
        b: "Swarn Pakshi",
        c: "Swarn Bagh",
        d: "Swarn Mrag",
      },
      correct: "4",
    },
    {
      ques: "Mata Shabri told Lord Ram to meet whom?",
      sol: {
        a: "Sugreev ji",
        b: "Baali ji",
        c: "Hanuman ji",
        d: "Jamvantha ji",
      },
      correct: "1",
    },
    {
      ques: "Where did Maharaj Sugreev stayed before becoming king?",
      sol: {
        a: "Drona giri parvat",
        b: "Rishyamukh Parvat",
        c: "Dandak Van",
        d: "Kishkindha",
      },
      correct: "2",
    },
    {
      ques: "Who was not in the sabha of Sugreev ji before death of Bali?",
      sol: { a: "Hanuman ji", b: "Angad ji", c: "jamvanth ji", d: "Kesari ji" },
      correct: "2",
    },
    {
      ques: "After Bali Sugreev ji was Maharaja of Kishkindha and Yuvraj was?",
      sol: { a: "Hanuman ji", b: "Nal ji", c: "Angad ji", d: "Neel ji" },
      correct: "3",
    },
    {
      ques: "How many faces are considered Hanumanj ji to have?",
      sol: { a: "4", b: "1", c: "3", d: "5" },
      correct: "4",
    },
    {
      ques: "Who was not the son of Dashanan?",
      sol: { a: "Vibhishan", b: "Meghnad", c: "Indrajeeyt", d: "Prahast" },
      correct: "1",
    },
    {
      ques: "What Vardaan Kumbhkaran wanted?",
      sol: { a: "Nidrasan", b: "Gyan", c: "Bhakti", d: "Indrasan" },
      correct: "4",
    },
    {
      ques: "Mata Saraswati made the original Vardaan of Kumbhkaran to?",
      sol: { a: "Gyan", b: "Nidrasana", c: "Bhakti", d: "Indrasan" },
      correct: "2",
    },
    {
      ques: "Ravan made Mata Sita stayed in?",
      sol: {
        a: "Virat Vatika",
        b: "Phool Vatika",
        c: "Ashok Vatika",
        d: "None of these",
      },
      correct: "3",
    },
    {
      ques: "Rakshasi who took care of Mata Sita in Lanka?",
      sol: { a: "Lankni", b: "Trijata", c: "Ahinya", d: "none of these" },
      correct: "2",
    },
    {
      ques: "Who was the female gatekeepre in Lanka?",
      sol: { a: "Trijata", b: "Lankni", c: "Ahinya", d: "none of these" },
      correct: "2",
    },
    {
      ques: "Who was the main spy of Dashanan?",
      sol: { a: "Vibhishan", b: "Prahast", c: "Veerupaksh", d: "Shukh" },
      correct: "4",
    },
    {
      ques: "By whom Vajramushti was killed?",
      sol: {
        a: "Maharaja Sugreev",
        b: "Hanuman ji",
        c: "Lord Ram ji",
        d: "Angad ji",
      },
      correct: "1",
    },

    {
      ques: "By whom Prahast was killed?",
      sol: {
        a: "Hanuman ji",
        b: "Lord Lakshman",
        c: "Lord Ram",
        d: "Jamvanth ji",
      },
      correct: "2",
    },

    {
      ques: "By whom sena nayak Durmukh was killed?",
      sol: {
        a: "Senapati Neel",
        b: "Maharaj Sugreev",
        c: "Lord Ram",
        d: "Lord Hanuman ji",
      },
      correct: "4",
    },

    {
      ques: "By whom Veer Makraksh was killed?",
      sol: {
        a: "Lord Ram ji",
        b: "Angad Ji",
        c: "Senapati Neel",
        d: "Senapati Nal",
      },
      correct: "1",
    },

    {
      ques: "By whom Veer Kumbhkaran was killed?",
      sol: {
        a: "Jamvanth ji",
        b: "Lord Hanuman ji",
        c: "Lord Lakshman",
        d: "Lord Ram ji",
      },
      correct: "4",
    },

    {
      ques: "By whom Devantak was killed?",
      sol: {
        a: "Lord Hanuman ji",
        b: "Maharaja Sugreev",
        c: "Senapati Neel",
        d: "Senapati Nal",
      },
      correct: "1",
    },

    {
      ques: "By whom Narantak was killed?",
      sol: {
        a: "Lord Hanuman ji",
        b: "Maharaja Sugreev",
        c: "Senapati Neel",
        d: "Angad ji",
      },
      correct: "4",
    },

    {
      ques: "By whom Trishura was killed??",
      sol: {
        a: "Angad ji",
        b: "Maharaja Sugreev",
        c: "Senapati Neel",
        d: "Lord Hanuman ji",
      },
      correct: "1",
    },

    {
      ques: "By whom Atikaya was killed?",
      sol: {
        a: "Lord Ram ji",
        b: "lord Lakshmana",
        c: "Hanuman Ji",
        d: "Vibhishan ji",
      },
      correct: "2",
    },

    {
      ques: "To whom was shakti hit when Indrajeet Attacked?",
      sol: {
        a: "Lord Ram ji",
        b: "lord Lakshmana",
        c: "Hanuman Ji",
        d: "Maharaja Sugreev",
      },
      correct: "2",
    },

    {
      ques: "To save Lakshmana ji life Mrid Sanjeevani was brought there by?",
      sol: {
        a: "Angad ji",
        b: "Maharaja Sugreev",
        c: "Senapati Neel",
        d: "Lord Hanuman ji",
      },
      correct: "4",
    },

    {
      ques: "Who tried to interruputed Hanuman ji while going to take mrid Sanjeevani?",
      sol: { a: "Kaalnemi", b: "Subahu", c: "Veeru Paksh", d: "Mareech" },
      correct: "1",
    },

    {
      ques: "Who killed Lankapati Ravan",
      sol: {
        a: "Lord Hanuman ji",
        b: "Vibhishan ji",
        c: "Lord Lakshman ji",
        d: "Lord Ram ji",
      },
      correct: "4",
    },

    {
      ques: "After Dashanan who was the king of Lanka?",
      sol: {
        a: "Vibhishan ji",
        b: "Maharaja Sugreev",
        c: "Lord Lakshman ji",
        d: "Lord Ram ji",
      },
      correct: "1",
    },
    {
      ques: "Events Related to Mahabharata happened in which Yuga?",
      sol: { a: "Sat Yuga", b: "Treta Yuga", c: "Dwapar Yuga", d: "Kali Yuga" },
      correct: "3",
    },
    {
      ques: "Who wrote Mahabharata?",
      sol: {
        a: "Shri Ganesh ji",
        b: "Maharishi Ved Vyas ji",
        c: "Maharishi Valmiki ji",
        d: "Tulsi Das ji",
      },
      correct: "1",
    },
    {
      ques: "Who didctated epic Mahabharata to Ganesh ji?",
      sol: {
        a: "Matang Rishi ji",
        b: "Maharishi Ved Vyas ji",
        c: "Maharishi Valmiki ji",
        d: "Lord Krishna",
      },
      correct: "2",
    },
    {
      ques: "Who was the wife of Maharaja Shantanu?",
      sol: {
        a: "Mandvi ji",
        b: "Yagyasaini ji",
        c: "Mandodri ji",
        d: "Shakuntala ji",
      },
      correct: "4",
    },
    {
      ques: "How many son did Maharaja Bharat had?",
      sol: { a: "8", b: "9", c: "10", d: "11" },
      correct: "2",
    },
    {
      ques: "How many days did Mahabharat was fought?",
      sol: { a: "15", b: "16", c: "17", d: "18" },
      correct: "4",
    },
    {
      ques: "How many child did Mata Ganga left in the Ganga River and left them dying",
      sol: { a: "8", b: "9", c: "10", d: "11" },
      correct: "1",
    },
    {
      ques: "Who was second wife of Maharaj Bharat?",
      sol: {
        a: "Ganga Maiya",
        b: "Mata Yagyasaini",
        c: "Mata Satyavati",
        d: "None",
      },
      correct: "3",
    },
    {
      ques: "From whom did Pitamah Bheeshma took his knowledge?",
      sol: {
        a: "Guru Brahspati",
        b: "Guru Parshuram ji",
        c: "Guru Shukracharya",
        d: "All of these",
      },
      correct: "4",
    },
    //sgsdgdfsghdsfsdfhdsf
    // sdfghsdfgsdf
    // asgasgs
    // asgasgas
    {
      ques: "To whom did Guru Dron Acharya was married?",
      sol: { a: "Krip", b: "Angira", c: "Kalpana", d: "Myanka" },
      correct: "1",
    },
    {
      ques: "What was the relation between Kul Guru Kripacharya and Gur Dron Acharya?",
      sol: {
        a: "Guru Dron was brother in law",
        b: "Kul Guru was brother in law",
        c: "brother",
        d: "none of these",
      },
      correct: "1",
    },
    {
      ques: "Who was Vichitraveer in relation to Pitahmah Bheeshma?",
      sol: { a: "Son", b: "Uncle", c: "Friend", d: "Brother" },
      correct: "4 ",
    },
    {
      ques: "Who were the wife of Maharaja Vichitraveer?",
      sol: { a: "Both", b: "Ambika", c: "Ambalika", d: "All of these" },
      correct: "1",
    },
    {
      ques: "Who became the reason for the death of Pitahmah Bheeshma?",
      sol: { Amba: "12", b: "Ambika", c: "Ambalika", d: "All of these" },
      correct: "1",
    },
    {
      ques: "By which name Bhagwan krishna was referred",
      sol: {
        a: "Vasudev",
        b: "Yashoda-nandna",
        c: "Devki-nandan",
        d: "All of these",
      },
      correct: "4",
    },
    {
      ques: "Where were Lord Krishna Borned",
      sol: { a: "Gokul", b: "Dwarka", c: "Mathura", d: "Vrindavan" },
      correct: "3",
    },
    {
      ques: "While Vasudev ji crossed Yamuna who helped the cross the Yamuna river",
      sol: {
        a: "Bhagwan Shankar",
        b: "Bhagwan Sheshnag",
        c: "Bhagwan Brahma",
        d: "all of these",
      },
      correct: "2",
    },
    {
      ques: "Who was the wife of Maharaj Dhritrashtra?",
      sol: {
        a: "Mata Gandhari",
        b: "Mata Kunti",
        c: "Mata Shakuntala",
        d: "Mata Satyavati",
      },
      correct: "1",
    },
    {
      ques: "Who was the wife of Maharaj Pandu?",
      sol: { a: "Mata Madri", b: "Mata Kunti", c: "Both", d: "None" },
      correct: "3",
    },
    {
      ques: "How many son did Maharaja Dhritrashtra had?",
      sol: { a: "104", b: "100", c: "102", d: "101" },
      correct: "3",
    },
    {
      ques: "How many son did Maharaja Pandu had?",
      sol: { a: "3", b: "4", c: "5", d: "6" },
      correct: "3",
    },
    {
      ques: "How many son did Mata Kunti had?",
      sol: { a: "3", b: "4", c: "5", d: "6" },
      correct: "2",
    },
    {
      ques: "WMata Shabri told Lord Ram to meet whom?",
      sol: { a: "3", b: "4", c: "1", d: "2" },
      correct: "4 ",
    },
    {
      ques: "Who was the elder in the given names?",
      sol: { a: "Bheem", b: "Duryodhan", c: "Yudhister", d: "Arjun" },
      correct: "3",
    },
    {
      ques: "Who was the elder in the given names?",
      sol: { a: "Bheem", b: "Duryodhan", c: "Dushasan", d: "Arjun" },
      correct: "1",
    },
    {
      ques: "Who was the elder in the given names?",
      sol: { a: "Nakul", b: "Duryodhan", c: "Yudhister", d: "Arjun" },
      correct: "2",
    },
    {
      ques: "From which Element did Mata Dropadi borned?",
      sol: { a: "Vayu", b: "Jal", c: "Agni", d: "Yagya" },
      correct: "4",
    },
    {
      ques: "Yudhister ji was the son of which Dev?",
      sol: { a: "Dharma Dev", b: "Vayu Dev", c: "Indra Dev", d: "Varun Dev" },
      correct: "1",
    },
    {
      ques: "Bheem ji was the son of which Dev?",
      sol: { a: "Dharma Dev", b: "Vayu Dev", c: "Indra Dev", d: "Varun Dev" },
      correct: "2",
    },
    {
      ques: "Arjun ji was the son of which Dev?",
      sol: { a: "Dharma Dev", b: "Vayu Dev", c: "Indra Dev", d: "Varun Dev" },
      correct: "3",
    },
    {
      ques: "For which astra and shastra Yudister ji was famous?",
      sol: { a: "Bhala", b: "Gada", c: "Dhanush-baan", d: "none" },
      correct: "1",
    },
    {
      ques: "For which astra and shastra Bheem ji was famous?",
      sol: { a: "Bhala", b: "Gada", c: "Dhanush-baan", d: "none" },
      correct: "2",
    },
    {
      ques: "For which astra and shastra Arjun ji was famous?",
      sol: { a: "Bhala", b: "Gada", c: "Dhanush-baan", d: "none" },
      correct: "3",
    },
    {
      ques: "waht was the relation of Duryodhan and Karn?",
      sol: { a: "Shishya", b: "Guru", c: "Brother", d: "Friend" },
      correct: "4",
    },
    {
      ques: "What was common in Angraj Karna and Ganga putra Bheeshma?",
      sol: { a: "Same Guru", b: "Same Kul", c: "Same age", d: "Same skills" },
      correct: "1",
    },
    {
      ques: "Ghatothkach was son of whom?",
      sol: { a: "Bheem", b: "Duryodhan", c: "Yudhister", d: "Arjun" },
      correct: "1",
    },

    {
      ques: "Abhimanyu was son of whom?",
      sol: { a: "Bheem", b: "Duryodhan", c: "Yudhister", d: "Arjun" },
      correct: "4",
    },

    {
      ques: "Where did Pandavas hide themselves during their Agyat varsh?",
      sol: { a: "Virat", b: "Ang", c: "Dwarka", d: "Indraprastha" },
      correct: "1",
    },

    {
      ques: "By whom Devantak was killed?",
      sol: {
        a: "Lord Hanuman ji",
        b: "Maharaja Sugreev",
        c: "Senapati Neel",
        d: "Senapati Nal",
      },
      correct: "1",
    },

    {
      ques: "Who killed Guru Dron Acharya",
      sol: { a: "Maharaja Dropad", b: "Bheem", c: "Drishtadyumna", d: "Arjun" },
      correct: "3",
    },

    {
      ques: "With whom Was Krishna playing the role of sarthi?",
      sol: { a: "Arjun", b: "Bheem", c: "Yudhiter", d: "None" },
      correct: "1",
    },

    {
      ques: "How many horses were there in the chariot of Arjun and Bhagwan Krishna?",
      sol: { a: "2", b: "1", c: "4", d: "None of these" },
      correct: "3",
    },

    {
      ques: "After seeing whom Pitahmaah Bheesham did not attack?",
      sol: { a: "Arjun", b: "lord Laksmana", c: "Yudhister", d: "Shikhandi" },
      correct: "4",
    },

    {
      ques: "Who are the chiranjeevi since the Dwapar yuga?",
      sol: { a: "Ved Vyas ji", b: "Ashwatthama", c: "both", d: "None" },
      correct: "3",
    },

    {
      ques: "Who are the chiranjeevi since the Dwapar yuga?",
      sol: { a: "Ved Vyas ji", b: "Ashwatthama", c: "both", d: "None" },
      correct: "3",
    },
  ];
  return questions;
}

export default Question;
