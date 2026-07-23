// Fake Name Generator - Complete 100% Feature-Parity & Country-Specific Identity Suite Logic

// Register PWA Service Worker for Native App Installation Support
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch(err => console.log('SW registration failed:', err));
    });
}

document.addEventListener('DOMContentLoaded', () => {

    // --- CURATED REALISTIC AVATAR PHOTO POOL (MALE & FEMALE) ---
    const avatarPhotos = {
        male: [
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&auto=format&fit=crop&q=80"
        ],
        female: [
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=300&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80"
        ]
    };

    let lastMaleIndex = -1;
    let lastFemaleIndex = -1;

    function getNonRepeatingPhoto(gender) {
        const list = avatarPhotos[gender] || avatarPhotos.male;
        let index = Math.floor(Math.random() * list.length);
        if (gender === 'male') {
            while (index === lastMaleIndex && list.length > 1) {
                index = Math.floor(Math.random() * list.length);
            }
            lastMaleIndex = index;
        } else {
            while (index === lastFemaleIndex && list.length > 1) {
                index = Math.floor(Math.random() * list.length);
            }
            lastFemaleIndex = index;
        }
        return list[index];
    }

    // --- LUHN ALGORITHM GENERATOR FOR CREDIT CARDS ---
    function generateLuhnCard(prefix, length) {
        let ccNumber = prefix;
        while (ccNumber.length < length - 1) {
            ccNumber += Math.floor(Math.random() * 10);
        }

        let sum = 0;
        let shouldDouble = true;
        for (let i = ccNumber.length - 1; i >= 0; i--) {
            let digit = parseInt(ccNumber.charAt(i));
            if (shouldDouble) {
                digit *= 2;
                if (digit > 9) digit -= 9;
            }
            sum += digit;
            shouldDouble = !shouldDouble;
        }

        const checkDigit = (10 - (sum % 10)) % 10;
        ccNumber += checkDigit;
        return ccNumber.replace(/(.{4})/g, '$1 ').trim();
    }

    // --- COUNTRY-SPECIFIC NATIONAL ID GENERATORS ---
    function generateNationalId(countryCode) {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        function randLet() { return letters[Math.floor(Math.random() * letters.length)]; }
        function randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

        if (countryCode === 'us') {
            return { label: 'SSN', value: `${randInt(100, 999)}-${randInt(10, 99)}-${randInt(1000, 9999)}` };
        } else if (countryCode === 'uk') {
            return { label: 'National Insurance number', value: `${randLet()}${randLet()} ${randInt(10, 99)} ${randInt(10, 99)} ${randInt(10, 99)} ${randLet()}` };
        } else if (countryCode === 'ca') {
            return { label: 'SIN (Social Insurance Number)', value: `${randInt(100, 999)} ${randInt(100, 999)} ${randInt(100, 999)}` };
        } else if (countryCode === 'au') {
            return { label: 'TFN (Tax File Number)', value: `${randInt(100, 999)} ${randInt(100, 999)} ${randInt(100, 999)}` };
        } else if (countryCode === 'gr' || countryCode === 'as') {
            return { label: 'Steueridentifikationsnummer', value: `${randInt(10, 99)} ${randInt(100, 999)} ${randInt(100, 999)} ${randInt(100, 999)}` };
        } else if (countryCode === 'fr') {
            return { label: 'INSEE / NIR Number', value: `${randInt(1, 2)} ${randInt(60, 99)} ${randInt(10, 12)} ${randInt(10, 99)} ${randInt(100, 999)} ${randInt(100, 999)} ${randInt(10, 99)}` };
        } else if (countryCode === 'sp') {
            return { label: 'DNI Number', value: `${randInt(10000000, 99999999)}${randLet()}` };
        } else {
            return { label: 'National Identification Number', value: `${randInt(100, 999)}-${randInt(10, 99)}-${randInt(1000, 9999)}` };
        }
    }

    // --- REAL USER AGENT DATABASE ---
    const realUserAgents = {
        windows: {
            chrome: [
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
                "Mozilla/5.0 (Windows NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
            ],
            firefox: [
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0",
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0"
            ],
            edge: [
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0",
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.2210.133"
            ]
        },
        mac: {
            safari: [
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_3) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3 Safari/605.1.15",
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_6_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Safari/605.1.15"
            ],
            chrome: [
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            ]
        },
        android: {
            chrome: [
                "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.6167.101 Mobile Safari/537.36",
                "Mozilla/5.0 (Linux; Android 13; Pixel 7 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.230 Mobile Safari/537.36"
            ]
        },
        ios: {
            safari: [
                "Mozilla/5.0 (iPhone; CPU iPhone OS 17_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3 Mobile/15E148 Safari/605.1.15",
                "Mozilla/5.0 (iPhone; CPU iPhone OS 16_7_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/605.1.15"
            ]
        },
        linux: {
            chrome: [
                "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
                "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:122.0) Gecko/20100101 Firefox/122.0"
            ]
        }
    };

    const allRealUserAgents = [
        ...realUserAgents.windows.chrome,
        ...realUserAgents.windows.firefox,
        ...realUserAgents.windows.edge,
        ...realUserAgents.mac.safari,
        ...realUserAgents.mac.chrome,
        ...realUserAgents.android.chrome,
        ...realUserAgents.ios.safari,
        ...realUserAgents.linux.chrome
    ];

    // --- ALL 37 NAME SETS DATA POOLS ---
    const dataPools = {
        firstNames: {
            male: {
                american: ['James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Joseph', 'Thomas', 'Charles', 'Christopher', 'Daniel', 'Eric'],
                arabic: ['Tariq', 'Zaid', 'Kareem', 'Omar', 'Youssef', 'Hamza', 'Bilal', 'Rashid', 'Samir', 'Faisal'],
                australian: ['Liam', 'Oliver', 'Noah', 'Jack', 'William', 'Henry', 'Leo', 'Lucas', 'Thomas'],
                brazil: ['Gabriel', 'Lucas', 'Matheus', 'Pedro', 'Guilherme', 'Gustavo', 'Felipe', 'Rafael'],
                chechen: ['Zubair', 'Aslan', 'Khamzat', 'Magomed', 'Rustam', 'Timur', 'Valid', 'Zelimkhan'],
                chinese: ['Wei', 'Ming', 'Hao', 'Jian', 'Xin', 'Jun', 'Yi', 'Bo', 'Tao'],
                chinesetrad: ['陳偉', '林豪', '張明', '黃俊', '李傑', '王宇'],
                croatian: ['Luka', 'Ivan', 'Marko', 'Filip', 'Karlo', 'Mateo', 'David', 'Jakov'],
                czech: ['Jan', 'Jakub', 'Tomas', 'Matyás', 'Filip', 'Vojtech', 'Lukás', 'David'],
                danish: ['William', 'Noah', 'Oscar', 'Lucas', 'Victor', 'Malthe', 'Emil', 'Alfred'],
                dutch: ['Daan', 'Sem', 'Milan', 'Levi', 'Luuk', 'Lucas', 'Niek', 'Bram'],
                england: ['Oliver', 'George', 'Harry', 'Noah', 'Jack', 'Charlie', 'Jacob', 'Alfie', 'Eric'],
                eritrean: ['Yonas', 'Amanuel', 'Dawit', 'Daniel', 'Filmon', 'Habtom', 'Mewael'],
                finnish: ['Eino', 'Leo', 'Väinö', 'Oliver', 'Eeli', 'Toivo', 'Onni', 'Juhani'],
                french: ['Gabriel', 'Léo', 'Louis', 'Lucas', 'Adam', 'Arthur', 'Hugo', 'Jules'],
                german: ['Ben', 'Paul', 'Leon', 'Finn', 'Elias', 'Jonas', 'Noah', 'Felix'],
                greenland: ['Malik', 'Minik', 'Inuk', 'Nuka', 'Qupanuk', 'Salik'],
                hispanic: ['Mateo', 'Santiago', 'Matias', 'Sebastian', 'Alejandro', 'Diego', 'Samuel'],
                hobbit: ['Frodo', 'Samwise', 'Peregrin', 'Meriadoc', 'Bilbo', 'Drogo', 'Otho'],
                hungarian: ['Bence', 'Máté', 'Levente', 'Dominik', 'Marcell', 'Ádám', 'Dániel'],
                icelandic: ['Aron', 'Alexander', 'Viktor', 'Kristján', 'Jón', 'Gunnar', 'Sigurður'],
                igbo: ['Chinedu', 'Emeka', 'Nnamdi', 'Obinna', 'Chidi', 'Kenechukwu', 'Ikenna'],
                italian: ['Leonardo', 'Francesco', 'Alessandro', 'Lorenzo', 'Mattia', 'Andrea'],
                japanese: ['Ren', 'Haruto', 'Itsuki', 'Minato', 'Sora', 'Yuto', 'Riku', 'Kaito'],
                japaneseanglicized: ['Kenji', 'Taro', 'Hiroshi', 'Daisuke', 'Kazuki', 'Takashi'],
                klingon: ['Worf', 'Gowron', 'Martok', 'Kahless', 'Kurn', 'Chang', 'Duras'],
                ninja: ['Shadow-Blade', 'Ghost-Walker', 'Silent-Wind', 'Night-Stalker', 'Viper-Fang'],
                norwegian: ['Jakob', 'Emil', 'Noah', 'Oliver', 'Filip', 'William', 'Lucas'],
                persian: ['Arman', 'Arvin', 'Kian', 'Samyar', 'Rayan', 'Bardia', 'Mahan'],
                polish: ['Antoni', 'Jan', 'Aleksander', 'Jakub', 'Szymon', 'Franciszek'],
                russian: ['Ребекка', 'Александр', 'Дмитрий', 'Максим', 'Сергей', 'Андрей', 'Алексей'],
                russiancyrillic: ['Ребекка', 'Анастасия', 'Мария', 'Дарья', 'Анна'],
                scottish: ['Jack', 'James', 'Oliver', 'Logan', 'Jackson', 'Harris', 'Lewis'],
                slovenian: ['Luka', 'Nik', 'Filip', 'Jakob', 'Mark', 'Zan', 'Vid'],
                swedish: ['William', 'Liam', 'Noah', 'Lucas', 'Oscar', 'Hugo'],
                thai: ['Somchai', 'Somsak', 'Arthit', 'Kittisak', 'Prasert', 'Niran'],
                vietnamese: ['Minh', 'Anh', 'Huy', 'Duc', 'Hoang', 'Long', 'Nam', 'Phong']
            },
            female: {
                american: ['Dolly', 'Emma', 'Olivia', 'Ava', 'Sophia', 'Isabella', 'Mia', 'Charlotte'],
                arabic: ['Fatima', 'Aisha', 'Maryam', 'Noor', 'Zahra', 'Layla', 'Salma', 'Hana'],
                australian: ['Isla', 'Charlotte', 'Olivia', 'Mia', 'Ava', 'Amelia', 'Grace'],
                brazil: ['Alice', 'Sophia', 'Helena', 'Valentina', 'Laura', 'Isabella', 'Manuela'],
                chechen: ['Aminat', 'Khedi', 'Zalina', 'Milana', 'Rayana', 'Madina', 'Selima'],
                chinese: ['Mei', 'Lian', 'Xue', 'Yan', 'Jing', 'Ting', 'Hui', 'Ling'],
                chinesetrad: ['陳淑芬', '林雅婷', '張家豪', '黃怡君', '李美玲'],
                croatian: ['Mia', 'Lucija', 'Ema', 'Ana', 'Petra', 'Sara', 'Lana', 'Nika'],
                czech: ['Eliska', 'Anna', 'Adéla', 'Tereza', 'Sofie', 'Viktorie', 'Ema'],
                danish: ['Alma', 'Ida', 'Clara', 'Ella', 'Olivia', 'Freja', 'Emma'],
                dutch: ['Emma', 'Julia', 'Sophie', 'Lotte', 'Fleur', 'Mila', 'Tess'],
                england: ['Olivia', 'Amelia', 'Isla', 'Ava', 'Mia', 'Ivy', 'Lily'],
                eritrean: ['Luwam', 'Segen', 'Yordanos', 'Semhar', 'Helen', 'Ruta'],
                finnish: ['Aada', 'Eevi', 'Linnea', 'Sofia', 'Aino', 'Helmi', 'Ella'],
                french: ['Jade', 'Louise', 'Emma', 'Alice', 'Ambre', 'Lina', 'Rose'],
                german: ['Mia', 'Emma', 'Hannah', 'Sofia', 'Emilia', 'Lina', 'Anna'],
                greenland: ['Pipaluk', 'Nivi', 'Paninnguaq', 'Ivalo', 'Qupanuk'],
                hispanic: ['Sofia', 'Isabella', 'Camila', 'Valeria', 'Mariana', 'Gabriela'],
                hobbit: ['Rosie', 'Elanor', 'Goldilocks', 'Diamond', 'Lobelia', 'Belladonna'],
                hungarian: ['Hanna', 'Anna', 'Zoé', 'Luca', 'Emma', 'Boglárka', 'Lili'],
                icelandic: ['Katrín', 'Margrét', 'Anna', 'Eva', 'Sara', 'Birta', 'Tinna'],
                igbo: ['Nneka', 'Chiamaka', 'Adanna', 'Ngozi', 'Chioma', 'Ifunanya'],
                italian: ['Sofia', 'Giulia', 'Aurora', 'Alice', 'Ginevra', 'Emma', 'Giorgia'],
                japanese: ['Himari', 'Hina', 'Yua', 'Sakura', 'Ichika', 'Akari', 'Sara'],
                japaneseanglicized: ['Yuki', 'Keiko', 'Akiko', 'Naoko', 'Emi', 'Mayumi'],
                klingon: ['B\'Elanna', 'Sirella', 'Valkris', 'Grilka', 'K\'Ehleyr', 'Lursa'],
                ninja: ['Shadow-Rose', 'Silent-Lotus', 'Viper-Blossom', 'Night-Shade'],
                norwegian: ['Nora', 'Emma', 'Ella', 'Maja', 'Olivia', 'Emilie', 'Sofie'],
                persian: ['Anahita', 'Darya', 'Helia', 'Roxana', 'Yasaman', 'Setayesh'],
                polish: ['Zuzanna', 'Julia', 'Maja', 'Zofia', 'Hanna', 'Lenka', 'Alicja'],
                russian: ['Ребекка', 'Анастасия', 'Мария', 'Дарья', 'Анна', 'Виктория'],
                russiancyrillic: ['Ребекка', 'Анастасия', 'Мария', 'Дарья', 'Анна'],
                scottish: ['Isla', 'Olivia', 'Emily', 'Freya', 'Ava', 'Sophie', 'Ella'],
                slovenian: ['Zala', 'Eva', 'Mia', 'Nika', 'Lana', 'Ema', 'Sara'],
                swedish: ['Alice', 'Maja', 'Vera', 'Alma', 'Selma', 'Elsa', 'Lilly'],
                thai: ['Malee', 'Siriporn', 'Ratana', 'Kanya', 'Sunisa', 'Ploy'],
                vietnamese: ['Linh', 'Trang', 'Hien', 'Mai', 'Lan', 'Huong', 'Phuong']
            }
        },
        lastNames: {
            american: ['Moore', 'Monroe', 'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez'],
            arabic: ['Al-Mansoor', 'Habib', 'Hassan', 'Hussein', 'Khouri', 'Nasser', 'Rahman', 'Saleh'],
            australian: ['Smith', 'Jones', 'Williams', 'Brown', 'Wilson', 'Taylor', 'Johnson', 'White'],
            brazil: ['Silva', 'Santos', 'Oliveira', 'Souza', 'Rodrigues', 'Ferreira', 'Alves', 'Pereira'],
            chechen: ['Kadyrov', 'Umarov', 'Basayev', 'Dudayev', 'Matsayev', 'Bisaev'],
            chinese: ['Wang', 'Li', 'Zhang', 'Liu', 'Chen', 'Yang', 'Huang', 'Zhao'],
            chinesetrad: ['王', '李', '張', '劉', '陳', '楊', '黃', '趙'],
            croatian: ['Horvat', 'Kovacevic', 'Babic', 'Maric', 'Juric', 'Novak'],
            czech: ['Novák', 'Svoboda', 'Novotný', 'Dvořák', 'Černý', 'Procházka'],
            danish: ['Nielsen', 'Jensen', 'Hansen', 'Pedersen', 'Andersen', 'Christensen'],
            dutch: ['de Jong', 'Jansen', 'de Vries', 'van de Berg', 'van Dijk', 'Bakker'],
            england: ['Moore', 'Smith', 'Jones', 'Taylor', 'Brown', 'Williams', 'Wilson', 'Johnson'],
            eritrean: ['Tewelde', 'Berhane', 'Ghebreyesus', 'Tesfay', 'Haile'],
            finnish: ['Korhonen', 'Virtanen', 'Mäkinen', 'Nieminen', 'Mäkelä', 'Hämäläinen'],
            french: ['Martin', 'Bernard', 'Thomas', 'Petit', 'Robert', 'Richard', 'Durand'],
            german: ['Müller', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer', 'Wagner'],
            greenland: ['Olsen', 'Petersen', 'Hansen', 'Johansen', 'Moller'],
            hispanic: ['Garcia', 'Rodriguez', 'Gonzalez', 'Fernandez', 'Lopez', 'Martinez'],
            hobbit: ['Baggins', 'Gamgee', 'Took', 'Brandybuck', 'Boffin', 'Bolger'],
            hungarian: ['Nagy', 'Kovács', 'Tóth', 'Szabó', 'Horváth', 'Varga'],
            icelandic: ['Jónsson', 'Einarsson', 'Guðmundsson', 'Gunnarsson', 'Sigurðsson'],
            igbo: ['Okonkwo', 'Okafor', 'Eze', 'Okeke', 'Nwachukwu', 'Okoro'],
            italian: ['Rossi', 'Russo', 'Ferrari', 'Esposito', 'Bianchi', 'Romano', 'Colombo'],
            japanese: ['Sato', 'Suzuki', 'Takahashi', 'Tanaka', 'Watanabe', 'Ito', 'Yamamoto'],
            japaneseanglicized: ['Sato', 'Suzuki', 'Takahashi', 'Tanaka', 'Watanabe'],
            klingon: ['son of Mogh', 'house of Duras', 'son of Arkur', 'house of Martok'],
            ninja: ['Shadow-Clan', 'Wind-Blade', 'Silent-Dragon', 'Night-Viper'],
            norwegian: ['Hansen', 'Johansen', 'Olsen', 'Larsen', 'Andersen', 'Pedersen'],
            persian: ['Hosseini', 'Ahmadi', 'Rezai', 'Mohammadi', 'Soltani'],
            polish: ['Nowak', 'Kowalski', 'Wiśniewski', 'Wójcik', 'Kowalczyk'],
            russian: ['Фокина', 'Иванова', 'Смирнова', 'Кузнецова', 'Попова', 'Васильева'],
            russiancyrillic: ['Фокина', 'Иванова', 'Смирнова', 'Кузнецова', 'Попова'],
            scottish: ['Moore', 'Smith', 'Brown', 'Wilson', 'Thomson', 'Robertson', 'Campbell'],
            slovenian: ['Novak', 'Horvat', 'Krajnc', 'Zupan', 'Kovacic'],
            swedish: ['Andersson', 'Johansson', 'Karlsson', 'Nilsson', 'Eriksson'],
            thai: ['Saetang', 'Saelee', 'Saelim', 'Phungphian', 'Chaiyapol'],
            vietnamese: ['Nguyen', 'Tran', 'Le', 'Pham', 'Hoang', 'Vu', 'Vo', 'Dang']
        },
        middleInitial: ['M.', 'A.', 'B.', 'C.', 'D.', 'E.', 'F.', 'G.', 'H.', 'J.', 'K.', 'L.', 'N.', 'P.', 'R.', 'S.', 'T.', 'W.'],
        
        cities: {
            uk: [{ street: '38 Mill Lane', city: 'CORRIEVORRIE', zip: 'IV13 4SQ', countryCode: '44', areaCode: '070' }],
            us: [{ street: '3423 Mandan Road', city: 'COLUMBIA', zip: 'MO 65201', countryCode: '1', areaCode: '573' }],
            as: [{ street: 'Weblinger Gürtel 34', city: 'HEIDEGRUND', zip: '3251', countryCode: '43', areaCode: '0680' }],
            au: [{ street: '102 George Street', city: 'SYDNEY', zip: 'NSW 2000', countryCode: '61', areaCode: '02' }],
            ca: [{ street: '78 Yonge Street', city: 'TORONTO', zip: 'ON M5V 2T6', countryCode: '1', areaCode: '416' }],
            gr: [{ street: 'Friedrichstraße 12', city: 'BERLIN', zip: '10115', countryCode: '49', areaCode: '030' }],
            fr: [{ street: '12 Rue de Rivoli', city: 'PARIS', zip: '75001', countryCode: '33', areaCode: '01' }],
            sp: [{ street: 'Gran Vía 42', city: 'MADRID', zip: '28013', countryCode: '34', areaCode: '91' }],
            it: [{ street: 'Via del Corso 15', city: 'ROME', zip: '00187', countryCode: '39', areaCode: '06' }]
        },
        vehicles: [
            '1994 Chevrolet Beretta', '2012 Honda Civic', '2018 Toyota Camry', '2015 Ford F-150',
            '2008 Nissan Altima', '2020 Hyundai Elantra', '2016 BMW 3 Series', '2019 Chevrolet Silverado'
        ],
        colors: ['Blue', 'Red', 'Green', 'Purple', 'Teal', 'Silver', 'Black', 'Navy', 'Maroon', 'Amber', 'Emerald', 'Coral', 'Charcoal'],
        emailDomains: ['jourrapide.com', 'teleworm.us', 'armyspy.com', 'rhyta.com', 'dayrep.com', 'einrot.com', 'fleckens.hu', 'gustr.com'],
        occupations: ['Amusement Machine Repairer', 'Network Administrator', 'Software Engineer', 'Financial Analyst', 'Graphic Designer', 'Marketing Specialist', 'Data Analyst', 'Project Manager', 'Architect', 'Civil Engineer', 'Accountant'],
        companies: ['Galaxy Man', 'Apex Cybernetics', 'OmniCorp Global', 'Vortex Systems', 'BlueSky Logistics', 'Starlight Media', 'Horizon Tech', 'Pinnacle Capital'],
        zodiacs: ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius']
    };

    // Country Notice Map
    const countryNameSetMap = {
        us: 'American, Hispanic',
        uk: 'England/Wales, Scottish',
        au: 'Australian',
        as: 'German, Hungarian, Slovenian',
        br: 'Brazil',
        ca: 'American, French',
        fr: 'French',
        gr: 'German',
        it: 'Italian',
        jp: 'Japanese, Japanese (Anglicized)',
        ru: 'Russian, Russian (Cyrillic)',
        sp: 'Hispanic, Spanish',
        dk: 'Danish',
        nl: 'Dutch',
        fi: 'Finnish',
        no: 'Norwegian',
        sw: 'Swedish',
        pl: 'Polish',
        cz: 'Czech',
        hu: 'Hungarian',
        is: 'Icelandic',
        za: 'English, Afrikaans',
        ch: 'Chinese, Chinese (Traditional)'
    };

    // State Variables
    let currentProfile = {};
    let sheetProfiles = [];
    let currentViewMode = 'normal';

    // --- MODE SWITCHER LOGIC (NORMAL VS WORKONLY) ---
    const btnModeNormal = document.getElementById('btn-mode-normal');
    const btnModeWorkonly = document.getElementById('btn-mode-workonly');
    const viewNormalContainer = document.getElementById('view-normal-container');
    const viewWorkonlyContainer = document.getElementById('view-workonly-container');

    btnModeNormal.addEventListener('click', () => {
        currentViewMode = 'normal';
        btnModeNormal.classList.add('active', 'btn-primary');
        btnModeNormal.classList.remove('btn-outline');
        btnModeWorkonly.classList.remove('active', 'btn-primary');
        btnModeWorkonly.classList.add('btn-outline');
        viewNormalContainer.style.display = 'grid';
        viewWorkonlyContainer.style.display = 'none';
        showToast('Switched to Normal (Cards) Mode', 'info');
    });

    btnModeWorkonly.addEventListener('click', () => {
        currentViewMode = 'workonly';
        btnModeWorkonly.classList.add('active', 'btn-primary');
        btnModeWorkonly.classList.remove('btn-outline');
        btnModeNormal.classList.remove('active', 'btn-primary');
        btnModeNormal.classList.add('btn-outline');
        viewNormalContainer.style.display = 'none';
        viewWorkonlyContainer.style.display = 'block';
        showToast('Switched to WorkOnly Mode', 'info');
    });

    // --- DYNAMIC LEGAL DOCUMENTATION SWITCHER ---
    const docTitles = {
        'doc-terms-of-service': 'Terms of Service — Legal Usage Terms & Conditions',
        'doc-license-agreement': 'End User License Agreement (EULA) — System Rights',
        'doc-privacy-policy': 'Privacy Policy — Anonymity & Data Protection Standard',
        'doc-overview': 'Full System Documentation & Technical Guide'
    };

    function showLegalDoc(docId) {
        const legalBlocks = document.querySelectorAll('.legal-block');
        const docSubnavBtns = document.querySelectorAll('.doc-nav-btn');
        const headingEl = document.getElementById('doc-dynamic-heading');

        legalBlocks.forEach(block => {
            if (block.id === docId) {
                block.classList.add('active');
            } else {
                block.classList.remove('active');
            }
        });

        docSubnavBtns.forEach(btn => {
            if (btn.dataset.target === docId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        if (headingEl && docTitles[docId]) {
            headingEl.textContent = docTitles[docId];
        }
    }

    document.querySelectorAll('.doc-nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            showLegalDoc(btn.dataset.target);
        });
    });

    // --- TAB SWITCHING & FOOTER NAVIGATION LOGIC ---
    const navLinks = document.querySelectorAll('.nav-links li');
    const tabContents = document.querySelectorAll('.tab-content');

    function switchTab(tabId, scrollTargetId = null) {
        navLinks.forEach(li => {
            if (li.dataset.tab === tabId) {
                li.classList.add('active');
            } else {
                li.classList.remove('active');
            }
        });

        tabContents.forEach(content => {
            if (content.id === `${tabId}-tab`) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });

        if (scrollTargetId) {
            showLegalDoc(scrollTargetId);
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    navLinks.forEach(li => {
        li.addEventListener('click', (e) => {
            e.preventDefault();
            const tabId = li.dataset.tab;
            switchTab(tabId);
        });
    });

    // Bind all footer links dynamically
    document.querySelectorAll('.fng-footer a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const hrefVal = anchor.getAttribute('href').replace('#', '');
            if (hrefVal === 'workonly') {
                switchTab('generator');
                btnModeWorkonly.click();
            } else if (hrefVal.startsWith('doc-')) {
                switchTab('faq', hrefVal);
            } else {
                switchTab(hrefVal);
            }
        });
    });

    // Footer Language Selector Handler
    const footerLangSelect = document.getElementById('footer-lang-select');
    if (footerLangSelect) {
        footerLangSelect.addEventListener('change', (e) => {
            const langName = e.target.options[e.target.selectedIndex].text;
            showToast(`Language set to ${langName}`, 'info');
        });
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomItem(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    // --- GENERATOR LOGIC ---
    function generateIdentity() {
        const selectedGenderOpt = document.getElementById('gen-gender').value;
        const selectedNameSet = document.getElementById('gen-nameset').value;
        const selectedCountry = document.getElementById('gen-country').value;

        // Update notice
        const noticeEl = document.getElementById('applicable-namesets');
        if (noticeEl) {
            noticeEl.textContent = countryNameSetMap[selectedCountry] || 'American, Hispanic';
        }

        let gender = selectedGenderOpt;
        if (gender === 'random') {
            gender = Math.random() > 0.5 ? 'male' : 'female';
        }

        const avatarPhotoUrl = getNonRepeatingPhoto(gender);

        const firstPool = (dataPools.firstNames[gender] && dataPools.firstNames[gender][selectedNameSet]) 
            ? dataPools.firstNames[gender][selectedNameSet] 
            : (dataPools.firstNames[gender].american || ['Eric', 'James', 'Michael', 'John']);

        const lastPool = dataPools.lastNames[selectedNameSet] || dataPools.lastNames.american;

        const firstName = getRandomItem(firstPool);
        const middleInit = selectedNameSet.includes('russian') ? '' : getRandomItem(dataPools.middleInitial) + ' ';
        const lastName = getRandomItem(lastPool);
        const fullName = `${firstName} ${middleInit}${lastName}`.trim();

        const cityPool = dataPools.cities[selectedCountry] || dataPools.cities.us;
        const location = getRandomItem(cityPool);

        const streetAddress = location.street;
        const cityName = location.city.toUpperCase();
        const zipName = location.zip;
        const fullAddressStr = `${streetAddress}, ${cityName}, ${zipName}`;

        const nationalIdObj = generateNationalId(selectedCountry);
        const motherMaiden = getRandomItem(dataPools.lastNames.american);

        let phone = '';
        if (selectedCountry === 'uk') {
            phone = `070 ${getRandomInt(1000, 9999)} ${getRandomInt(1000, 9999)}`;
        } else if (selectedCountry === 'as') {
            phone = `0680 ${getRandomInt(100, 999)} ${getRandomInt(10, 99)} ${getRandomInt(10, 99)}`;
        } else {
            phone = `${location.areaCode}-${getRandomInt(200, 999)}-${getRandomInt(1000, 9999)}`;
        }

        const birthYear = getRandomInt(1965, 2003);
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const birthMonth = getRandomItem(months);
        const birthDay = getRandomInt(1, 28);
        const birthday = `${birthMonth} ${birthDay}, ${birthYear}`;
        const age = `${2026 - birthYear} years old`;
        const zodiac = getRandomItem(dataPools.zodiacs);

        const cleanName = `${firstName}${lastName}`.replace(/[^a-zA-Z]/g, '');
        const email = `${cleanName || 'user'}@${getRandomItem(dataPools.emailDomains)}`;
        const username = `${cleanName || 'user'}${getRandomInt(10, 99)}`;
        const password = Math.random().toString(36).slice(-10) + getRandomInt(10, 99);
        const website = `${(cleanName || 'site').toLowerCase()}.com`;
        const userAgent = getRandomItem(allRealUserAgents);

        const cardTypes = [
            { type: 'Visa', prefix: '4532', len: 16 },
            { type: 'Mastercard', prefix: '5424', len: 16 },
            { type: 'American Express', prefix: '3782', len: 15 },
            { type: 'Discover', prefix: '6011', len: 16 }
        ];
        const cardInfo = getRandomItem(cardTypes);
        const cardNum = generateLuhnCard(cardInfo.prefix, cardInfo.len);

        const expMonth = String(getRandomInt(1, 12)).padStart(2, '0');
        const expYear = getRandomInt(2027, 2032);
        const expires = `${expMonth}/${expYear}`;
        const cvv = getRandomInt(100, 999);
        const company = getRandomItem(dataPools.companies);
        const occupation = getRandomItem(dataPools.occupations);

        const feet = getRandomInt(5, 6);
        const inches = getRandomInt(0, 11);
        const heightCm = Math.round((feet * 12 + inches) * 2.54);
        const lbs = getRandomInt(110, 210);
        const kg = (lbs * 0.453592).toFixed(1);
        const physical = `${feet}' ${inches}" (${heightCm} cm) / ${lbs} lbs (${kg} kg)`;
        const blood = getRandomItem(['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']);

        const ups = `1Z ${getRandomInt(100,999)} ${getRandomInt(100,999)} ${getRandomInt(10,99)} ${getRandomInt(1000,9999)} ${getRandomInt(100,999)} ${getRandomInt(0,9)}`;
        const western = `${getRandomInt(1000000000, 9999999999)}`;
        const moneygram = `${getRandomInt(10000000, 99999999)}`;
        const color = getRandomItem(dataPools.colors);
        const vehicle = getRandomItem(dataPools.vehicles);
        const guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });

        currentProfile = {
            gender,
            avatarPhotoUrl,
            fullName,
            streetAddress: fullAddressStr,
            streetOnly: streetAddress,
            cityOnly: cityName,
            zipOnly: zipName,
            nationalIdLabel: nationalIdObj.label,
            ssn: nationalIdObj.value,
            motherMaiden,
            geo: `38.893103, -92.249388`,
            qr: `QR Code generated for ${fullName}`,
            phone,
            countryCode: location.countryCode || '1',
            birthday,
            age,
            zodiac,
            email,
            username,
            password,
            website,
            userAgent,
            card: `${cardNum} (${cardInfo.type})`,
            expires,
            cvv,
            company,
            occupation,
            physical,
            blood,
            ups,
            western,
            moneygram,
            color,
            vehicle,
            guid
        };

        renderProfileUI();
    }

    function renderProfileUI() {
        // --- 1. RENDER NORMAL MODE (CARDS WITH REALISTIC PHOTO AVATAR) ---
        const avatarBox = document.getElementById('profile-avatar');
        if (avatarBox) {
            avatarBox.innerHTML = `<img src="${currentProfile.avatarPhotoUrl}" alt="${currentProfile.fullName}" style="width:100%; height:100%; object-fit:cover; border-radius:50%;" />`;
        }
        document.getElementById('profile-gender-badge').textContent = currentProfile.gender.toUpperCase();
        document.getElementById('profile-fullname').textContent = currentProfile.fullName;
        document.getElementById('profile-hero-address').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${currentProfile.streetAddress}`;

        document.getElementById('val-fullname').textContent = currentProfile.fullName;
        document.getElementById('val-address').textContent = currentProfile.streetAddress;
        document.getElementById('val-maiden').textContent = currentProfile.motherMaiden;
        
        const labelSsnEl = document.getElementById('label-val-ssn');
        if (labelSsnEl) labelSsnEl.textContent = currentProfile.nationalIdLabel;
        document.getElementById('val-ssn').textContent = currentProfile.ssn;
        
        document.getElementById('val-geo').textContent = currentProfile.geo;
        document.getElementById('val-qr').textContent = currentProfile.qr;

        document.getElementById('val-phone').textContent = currentProfile.phone;
        document.getElementById('val-countrycode').textContent = `+${currentProfile.countryCode}`;
        document.getElementById('val-birthday').textContent = currentProfile.birthday;
        document.getElementById('val-age').textContent = currentProfile.age;
        document.getElementById('val-zodiac').textContent = currentProfile.zodiac;

        document.getElementById('val-email').textContent = currentProfile.email;
        document.getElementById('val-username').textContent = currentProfile.username;
        document.getElementById('val-password').textContent = currentProfile.password;
        document.getElementById('val-website').textContent = currentProfile.website;
        document.getElementById('val-useragent').textContent = currentProfile.userAgent;

        document.getElementById('val-card').textContent = currentProfile.card;
        document.getElementById('val-expires').textContent = currentProfile.expires;
        document.getElementById('val-cvv').textContent = currentProfile.cvv;
        document.getElementById('val-company').textContent = currentProfile.company;
        document.getElementById('val-occupation').textContent = currentProfile.occupation;

        document.getElementById('val-physical').textContent = currentProfile.physical;
        document.getElementById('val-blood').textContent = currentProfile.blood;
        document.getElementById('val-ups').textContent = currentProfile.ups;
        document.getElementById('val-western').textContent = currentProfile.western;
        document.getElementById('val-moneygram').textContent = currentProfile.moneygram;
        document.getElementById('val-color').textContent = currentProfile.color;
        document.getElementById('val-vehicle').textContent = currentProfile.vehicle;
        document.getElementById('val-guid').textContent = currentProfile.guid;

        // --- 2. RENDER WORKONLY MODE (REALISTIC PHOTO AVATAR & EXACT 3-LINE ADDRESS) ---
        const woAvatarBox = document.getElementById('wo-avatar-box');
        if (woAvatarBox) {
            woAvatarBox.innerHTML = `<img src="${currentProfile.avatarPhotoUrl}" alt="${currentProfile.fullName}" style="width:100%; height:100%; object-fit:cover;" />`;
        }
        document.getElementById('wo-fullname').textContent = currentProfile.fullName;
        
        document.getElementById('wo-street-val').textContent = currentProfile.streetOnly;
        document.getElementById('wo-city-val').textContent = currentProfile.cityOnly;
        document.getElementById('wo-zip-val').textContent = currentProfile.zipOnly;

        document.getElementById('wo-phone').textContent = currentProfile.phone;
        document.getElementById('wo-countrycode').textContent = currentProfile.countryCode;
        document.getElementById('wo-email').textContent = currentProfile.email;

        document.getElementById('wo-birthday').textContent = currentProfile.birthday;
        document.getElementById('wo-age').textContent = currentProfile.age;
    }

    document.getElementById('generator-form').addEventListener('submit', (e) => {
        e.preventDefault();
        generateIdentity();
        showToast('Generated fresh identity profile!', 'success');
    });

    // Auto-update when select values change
    document.getElementById('gen-nameset').addEventListener('change', () => generateIdentity());
    document.getElementById('gen-country').addEventListener('change', () => generateIdentity());
    document.getElementById('gen-gender').addEventListener('change', () => generateIdentity());

    // --- COPY TO CLIPBOARD & TOAST SYSTEM ---
    function showToast(message, type = 'info') {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${message}`;
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(50px)';
            setTimeout(() => toast.remove(), 300);
        }, 2500);
    }

    // Bind copy buttons globally
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.copy-btn');
        if (btn) {
            const targetId = btn.dataset.target;
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                navigator.clipboard.writeText(targetEl.textContent);
                showToast('Copied to clipboard!', 'info');
            }
        }
    });

    document.getElementById('copy-all-btn').addEventListener('click', () => {
        const fullText = `
Name: ${currentProfile.fullName}
Address: ${currentProfile.streetAddress}
${currentProfile.nationalIdLabel}: ${currentProfile.ssn}
Phone: ${currentProfile.phone}
Email: ${currentProfile.email}
Username: ${currentProfile.username}
Password: ${currentProfile.password}
Credit Card: ${currentProfile.card}
Expires: ${currentProfile.expires} | CVV: ${currentProfile.cvv}
Vehicle: ${currentProfile.vehicle}
User Agent: ${currentProfile.userAgent}
        `.trim();

        navigator.clipboard.writeText(fullText);
        showToast('All profile details copied!', 'success');
    });

    // --- LIVE GOOGLE SHEET URL LINKER LOGIC ---
    const gsheetInput = document.getElementById('gsheet-url-input');
    const loadGsheetBtn = document.getElementById('load-gsheet-btn');
    const gsheetWrapper = document.getElementById('gsheet-iframe-wrapper');

    const savedSheetUrl = localStorage.getItem('cpa_saved_gsheet_url');
    if (savedSheetUrl) {
        gsheetInput.value = savedSheetUrl;
        renderGoogleSheetIframe(savedSheetUrl);
    }

    loadGsheetBtn.addEventListener('click', () => {
        const url = gsheetInput.value.trim();
        if (!url) {
            showToast('Please enter a Google Sheet URL!', 'info');
            return;
        }

        localStorage.setItem('cpa_saved_gsheet_url', url);
        renderGoogleSheetIframe(url);
        showToast('Loaded Live Google Sheet!', 'success');
    });

    function renderGoogleSheetIframe(url) {
        let embedUrl = url;
        const sheetIdMatch = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
        if (sheetIdMatch && sheetIdMatch[1]) {
            const sheetId = sheetIdMatch[1];
            embedUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/pubhtml?widget=true&headers=false`;
        }

        gsheetWrapper.innerHTML = `
            <iframe src="${embedUrl}" class="gsheet-iframe" title="Live Google Sheet"></iframe>
        `;
    }

    // --- LOCAL GOOGLE SHEET DATA LOGIC ---
    function addCurrentToSheet() {
        if (!currentProfile.fullName) return;
        sheetProfiles.push({ ...currentProfile, id: Date.now() });
        renderSheetTable();
        showToast('Added profile to local table!', 'success');
    }

    function renderSheetTable() {
        const tbody = document.getElementById('sheet-table-body');
        if (sheetProfiles.length === 0) {
            tbody.innerHTML = `<tr><td colspan="11" style="text-align:center; color: var(--text-muted);">No identities added to table yet. Click "Add Current Profile" to add data.</td></tr>`;
            return;
        }

        tbody.innerHTML = sheetProfiles.map((p, idx) => `
            <tr>
                <td>${idx + 1}</td>
                <td><strong>${p.fullName}</strong></td>
                <td>${p.gender}</td>
                <td>${p.email}</td>
                <td>${p.phone}</td>
                <td>${p.streetAddress}</td>
                <td>${p.ssn}</td>
                <td>${p.card}</td>
                <td>${p.vehicle}</td>
                <td style="max-width: 150px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${p.userAgent}</td>
                <td>
                    <button class="btn btn-sm btn-danger-outline delete-row-btn" data-id="${p.id}"><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>
        `).join('');

        document.querySelectorAll('.delete-row-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.dataset.id);
                sheetProfiles = sheetProfiles.filter(p => p.id !== id);
                renderSheetTable();
                showToast('Removed row from table.', 'info');
            });
        });
    }

    document.addEventListener('click', (e) => {
        if (e.target.closest('.send-to-sheet-btn')) addCurrentToSheet();
        if (e.target.closest('.send-to-notepad-btn')) {
            insertProfileToNpp();
            switchTab('notepad');
        }
    });

    // Header "Save Profile" button
    const quickSaveBtn = document.getElementById('quick-save-btn');
    if (quickSaveBtn) {
        quickSaveBtn.addEventListener('click', () => {
            insertProfileToNpp();
            switchTab('notepad');
        });
    }

    document.getElementById('add-current-to-sheet').addEventListener('click', addCurrentToSheet);

    document.getElementById('export-csv-btn').addEventListener('click', () => {
        if (sheetProfiles.length === 0) {
            showToast('No data to export!', 'info');
            return;
        }

        const headers = ["Full Name", "Gender", "Email", "Phone", "Address", "National ID", "Credit Card", "Expires", "CVV", "Vehicle", "User Agent"];
        const rows = sheetProfiles.map(p => [
            `"${p.fullName}"`, `"${p.gender}"`, `"${p.email}"`, `"${p.phone}"`, `"${p.streetAddress}"`, `"${p.ssn}"`, `"${p.card}"`, `"${p.expires}"`, `"${p.cvv}"`, `"${p.vehicle}"`, `"${p.userAgent}"`
        ]);

        const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `Fake_Identities_${Date.now()}.csv`);
        document.body.appendChild(link);
        link.click();
        link.remove();
        showToast('Downloaded CSV File!', 'success');
    });

    document.getElementById('copy-tsv-btn').addEventListener('click', () => {
        if (sheetProfiles.length === 0) {
            showToast('No data to copy!', 'info');
            return;
        }

        const rows = sheetProfiles.map(p => `${p.fullName}\t${p.gender}\t${p.email}\t${p.phone}\t${p.streetAddress}\t${p.ssn}\t${p.card}\t${p.vehicle}\t${p.userAgent}`);
        navigator.clipboard.writeText(rows.join("\n"));
        showToast('Copied TSV for Google Sheets!', 'success');
    });

    document.getElementById('clear-sheet-btn').addEventListener('click', () => {
        sheetProfiles = [];
        renderSheetTable();
        showToast('Cleared sheet table.', 'info');
    });

    // --- USER AGENT TAB LOGIC ---
    document.getElementById('generate-ua-btn').addEventListener('click', () => {
        const count = parseInt(document.getElementById('ua-count').value);
        const osFilter = document.getElementById('ua-os').value;
        const browserFilter = document.getElementById('ua-browser').value;

        let pool = [];
        if (osFilter !== 'all' && realUserAgents[osFilter]) {
            if (browserFilter !== 'all' && realUserAgents[osFilter][browserFilter]) {
                pool = realUserAgents[osFilter][browserFilter];
            } else {
                pool = Object.values(realUserAgents[osFilter]).flat();
            }
        } else {
            pool = allRealUserAgents;
        }

        const list = [];
        for (let i = 0; i < count; i++) {
            list.push(getRandomItem(pool));
        }

        document.getElementById('ua-output-area').value = list.join('\n\n');
        showToast(`Generated ${count} Real User Agents!`, 'success');
    });

    document.getElementById('copy-ua-list-btn').addEventListener('click', () => {
        const text = document.getElementById('ua-output-area').value;
        if (!text) {
            showToast('No User Agents to copy!', 'info');
            return;
        }
        navigator.clipboard.writeText(text);
        showToast('Real User Agent list copied!', 'success');
    });

    // --- NOTEPAD++ MULTI-TAB ENGINE (WITH PIN & RENAME FEATURES) ---
    let nppDocs = [
        { id: 1, name: 'new 1.txt', content: '', isPinned: false }
    ];
    let nppActiveTabId = 1;
    let nppDocCounter = 1;
    let nppFontSize = 14;

    const nppTabsBar = document.getElementById('npp-tabs-bar');
    const nppAddTabBtn = document.getElementById('npp-add-tab-btn');
    const nppTextarea = document.getElementById('npp-editor-textarea');
    const nppLineNumbers = document.getElementById('npp-line-numbers');
    const nppStatDocName = document.getElementById('npp-stat-docname');
    const nppStatLines = document.getElementById('npp-stat-lines');
    const nppStatPos = document.getElementById('npp-stat-pos');

    const savedNppData = localStorage.getItem('cpa_npp_docs_v2');
    if (savedNppData) {
        try {
            const parsed = JSON.parse(savedNppData);
            if (parsed.docs && parsed.docs.length > 0) {
                nppDocs = parsed.docs;
                nppActiveTabId = parsed.activeId || nppDocs[0].id;
                nppDocCounter = parsed.counter || nppDocs.length;
            }
        } catch (e) { console.error('Failed to parse npp data', e); }
    }

    function renderNppTabs() {
        const existingTabs = nppTabsBar.querySelectorAll('.npp-tab');
        existingTabs.forEach(t => t.remove());

        // Sort tabs so pinned tabs stay in front
        const sortedDocs = [...nppDocs].sort((a, b) => (b.isPinned ? 1 : 0) - (a.isPinned ? 1 : 0));

        sortedDocs.forEach(doc => {
            const tabEl = document.createElement('div');
            tabEl.className = `npp-tab ${doc.id === nppActiveTabId ? 'active' : ''} ${doc.isPinned ? 'pinned' : ''}`;
            tabEl.dataset.id = doc.id;
            
            const iconClass = doc.isPinned ? 'fa-solid fa-thumbtack' : 'fa-solid fa-file-lines';
            const closeBtnHtml = doc.isPinned ? '' : `<span class="npp-tab-close" data-id="${doc.id}">&times;</span>`;

            tabEl.innerHTML = `
                <i class="${iconClass} npp-tab-icon" style="${doc.isPinned ? 'color: var(--primary);' : ''}"></i>
                <span class="npp-tab-title">${doc.name}</span>
                ${closeBtnHtml}
            `;

            tabEl.addEventListener('click', (e) => {
                if (e.target.classList.contains('npp-tab-close')) {
                    e.stopPropagation();
                    closeNppTab(parseInt(e.target.dataset.id));
                } else {
                    switchNppTab(doc.id);
                }
            });

            // Double click tab title to rename directly
            tabEl.addEventListener('dblclick', (e) => {
                e.stopPropagation();
                promptRenameTab(doc.id);
            });

            nppTabsBar.insertBefore(tabEl, nppAddTabBtn);
        });

        loadActiveDocContent();
    }

    function promptRenameTab(docId) {
        const doc = nppDocs.find(d => d.id === docId);
        if (!doc) return;
        const newName = prompt('Rename Document Tab:', doc.name);
        if (newName && newName.trim()) {
            doc.name = newName.trim();
            renderNppTabs();
            saveNppState();
            showToast(`Renamed tab to "${doc.name}"`, 'success');
        }
    }

    function togglePinActiveTab() {
        const doc = nppDocs.find(d => d.id === nppActiveTabId);
        if (!doc) return;
        doc.isPinned = !doc.isPinned;
        renderNppTabs();
        saveNppState();
        showToast(doc.isPinned ? `Pinned "${doc.name}" tab!` : `Unpinned "${doc.name}" tab.`, 'info');
    }

    // Bind Rename & Pin toolbar buttons
    const btnRename = document.getElementById('npp-btn-rename');
    if (btnRename) {
        btnRename.addEventListener('click', () => promptRenameTab(nppActiveTabId));
    }

    const btnPin = document.getElementById('npp-btn-pin');
    if (btnPin) {
        btnPin.addEventListener('click', togglePinActiveTab);
    }

    function switchNppTab(docId) {
        const currentDoc = nppDocs.find(d => d.id === nppActiveTabId);
        if (currentDoc) {
            currentDoc.content = nppTextarea.value;
        }

        nppActiveTabId = docId;
        renderNppTabs();
        saveNppState();
    }

    function loadActiveDocContent() {
        const activeDoc = nppDocs.find(d => d.id === nppActiveTabId) || nppDocs[0];
        if (activeDoc) {
            nppTextarea.value = activeDoc.content;
            nppStatDocName.textContent = activeDoc.name;
            updateEditorStats();
        }
    }

    function createNppTab(name = null, content = '') {
        const currentDoc = nppDocs.find(d => d.id === nppActiveTabId);
        if (currentDoc) currentDoc.content = nppTextarea.value;

        nppDocCounter++;
        const newId = Date.now();
        const tabName = name || `new ${nppDocCounter}.txt`;
        nppDocs.push({ id: newId, name: tabName, content, isPinned: false });

        nppActiveTabId = newId;
        renderNppTabs();
        saveNppState();
        showToast(`Created ${tabName}`, 'info');
    }

    function closeNppTab(docId) {
        const targetDoc = nppDocs.find(d => d.id === docId);
        if (targetDoc && targetDoc.isPinned) {
            showToast('Pinned tabs cannot be closed! Unpin first.', 'warning');
            return;
        }

        if (nppDocs.length === 1) {
            showToast('Cannot close the last tab!', 'info');
            return;
        }

        nppDocs = nppDocs.filter(d => d.id !== docId);
        if (nppActiveTabId === docId) {
            nppActiveTabId = nppDocs[nppDocs.length - 1].id;
        }

        renderNppTabs();
        saveNppState();
        showToast('Closed document tab.', 'info');
    }

    nppAddTabBtn.addEventListener('click', () => createNppTab());
    document.getElementById('npp-btn-new').addEventListener('click', () => createNppTab());

    function updateEditorStats() {
        const val = nppTextarea.value;
        const lines = val.split('\n');
        const lineCount = lines.length;

        let numsHtml = '';
        for (let i = 1; i <= lineCount; i++) {
            numsHtml += i + '<br>';
        }
        nppLineNumbers.innerHTML = numsHtml;

        const chars = val.length;
        nppStatLines.textContent = `Length: ${lineCount} lines | ${chars} chars`;

        const selStart = nppTextarea.selectionStart;
        const textBeforeSel = val.substring(0, selStart);
        const currentLineNum = textBeforeSel.split('\n').length;
        const lastLineBreak = textBeforeSel.lastIndexOf('\n');
        const colNum = selStart - lastLineBreak;
        nppStatPos.textContent = `Ln: ${currentLineNum}  Col: ${colNum}`;

        const activeDoc = nppDocs.find(d => d.id === nppActiveTabId);
        if (activeDoc) {
            activeDoc.content = val;
            saveNppState();
        }
    }

    nppTextarea.addEventListener('scroll', () => {
        nppLineNumbers.scrollTop = nppTextarea.scrollTop;
    });

    nppTextarea.addEventListener('input', updateEditorStats);
    nppTextarea.addEventListener('keyup', updateEditorStats);
    nppTextarea.addEventListener('click', updateEditorStats);

    function saveNppState() {
        localStorage.setItem('cpa_npp_docs_v2', JSON.stringify({
            docs: nppDocs,
            activeId: nppActiveTabId,
            counter: nppDocCounter
        }));
    }

    const fileInput = document.getElementById('npp-file-input');
    document.getElementById('npp-btn-open').addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            createNppTab(file.name, event.target.result);
        };
        reader.readAsText(file);
        fileInput.value = '';
    });

    document.getElementById('npp-btn-save').addEventListener('click', () => {
        const activeDoc = nppDocs.find(d => d.id === nppActiveTabId);
        if (!activeDoc) return;

        const blob = new Blob([nppTextarea.value], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = activeDoc.name;
        a.click();
        URL.revokeObjectURL(url);
        showToast(`Saved ${activeDoc.name}`, 'success');
    });

    document.getElementById('npp-btn-save-all').addEventListener('click', () => {
        nppDocs.forEach((doc, idx) => {
            setTimeout(() => {
                const content = (doc.id === nppActiveTabId) ? nppTextarea.value : doc.content;
                const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = doc.name;
                a.click();
                URL.revokeObjectURL(url);
            }, idx * 250);
        });
        showToast(`Saving all ${nppDocs.length} open documents...`, 'success');
    });

    document.getElementById('npp-btn-copy').addEventListener('click', () => {
        navigator.clipboard.writeText(nppTextarea.value);
        showToast('Copied editor text to clipboard!', 'success');
    });

    document.getElementById('npp-btn-clear').addEventListener('click', () => {
        nppTextarea.value = '';
        updateEditorStats();
        showToast('Cleared current document.', 'info');
    });

    document.getElementById('npp-btn-insert-profile').addEventListener('click', insertProfileToNpp);

    function insertProfileToNpp() {
        if (!currentProfile.fullName) return;
        const profileStr = `
========================================
NOTEPAD++ PROFILE LOG - ${new Date().toLocaleString()}
========================================
Full Name   : ${currentProfile.fullName}
Address     : ${currentProfile.streetAddress}
ID Number   : ${currentProfile.ssn} (${currentProfile.nationalIdLabel})
Phone       : ${currentProfile.phone}
Email       : ${currentProfile.email}
Username    : ${currentProfile.username}
Password    : ${currentProfile.password}
Credit Card : ${currentProfile.card} (Exp: ${currentProfile.expires}, CVV: ${currentProfile.cvv})
Vehicle     : ${currentProfile.vehicle}
User Agent  : ${currentProfile.userAgent}
========================================

`;
        nppTextarea.value = profileStr + nppTextarea.value;
        updateEditorStats();
        showToast('Inserted Profile into Notepad++!', 'success');
    }

    const searchBar = document.getElementById('npp-search-bar');
    document.getElementById('npp-btn-search').addEventListener('click', () => {
        searchBar.style.display = searchBar.style.display === 'none' ? 'flex' : 'none';
    });
    document.getElementById('npp-close-search').addEventListener('click', () => {
        searchBar.style.display = 'none';
    });

    document.getElementById('npp-do-replace').addEventListener('click', () => {
        const findVal = document.getElementById('npp-search-input').value;
        const replaceVal = document.getElementById('npp-replace-input').value;
        if (!findVal) return;

        nppTextarea.value = nppTextarea.value.replace(findVal, replaceVal);
        updateEditorStats();
        showToast('Replaced occurrence.', 'info');
    });

    document.getElementById('npp-do-replace-all').addEventListener('click', () => {
        const findVal = document.getElementById('npp-search-input').value;
        const replaceVal = document.getElementById('npp-replace-input').value;
        if (!findVal) return;

        const regex = new RegExp(findVal.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
        nppTextarea.value = nppTextarea.value.replace(regex, replaceVal);
        updateEditorStats();
        showToast('Replaced all occurrences!', 'success');
    });

    document.getElementById('npp-btn-zoom-in').addEventListener('click', () => {
        nppFontSize += 2;
        nppTextarea.style.fontSize = `${nppFontSize}px`;
        nppLineNumbers.style.fontSize = `${nppFontSize}px`;
        showToast(`Font size: ${nppFontSize}px`, 'info');
    });

    document.getElementById('npp-btn-zoom-out').addEventListener('click', () => {
        if (nppFontSize > 10) {
            nppFontSize -= 2;
            nppTextarea.style.fontSize = `${nppFontSize}px`;
            nppLineNumbers.style.fontSize = `${nppFontSize}px`;
            showToast(`Font size: ${nppFontSize}px`, 'info');
        }
    });

    // Initial Setup
    renderNppTabs();
    generateIdentity();
    renderSheetTable();
});
