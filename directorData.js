const directors = [
  {name: 'David Lynch', country: 'USA', age: 73},
  {name: 'Stanley Kubrick', country: 'USA', age: 70},
  {name: 'Robert Bresson', country: 'FRA', age: 98},
  {name: 'Alfred Hitchcock', country: 'USA', age: 80},
  {name: 'Martin Scorsese', country: 'USA', age: 76},
  {name: 'Clint Eastwood', country: 'USA', age: 89},
  {name: 'William Wyler', country: 'USA', age: 79},
  {name: 'Billy Wilder', country: 'AUT', age: 95},
  {name: 'John Ford', country: 'USA', age: 79},
  {name: 'Fritz Lang', country: 'AUT', age: 85},
  {name: 'Fred Zinnemann', country: 'AUT', age: 89},
  {name: 'Sidney Lumet', country: 'USA', age: 86},
  {name: 'Francis Ford Coppola', country: 'USA', age: 80},
  {name: 'David Fincher', country: 'USA', age: 57},
  {name: 'Vittorio De Sica', country: 'ITA', age: 73},
  {name: 'Sergio Leone', country: 'ITA', age: 60},
  {name: 'Federico Fellini', country: 'ITA', age: 73},
  {name: 'Ingmar Bergman', country: 'SWE', age: 89},
  {name: 'Elia Kazan', country: 'TUR', age: 94},
  {name: 'John Huston', country: 'USA', age: 81},
  {name: 'Theodoros Angelopoulos', country: 'GRC', age: 76},
  {name: 'Akira Kurosawa', country: 'JPN', age: 88},
  {name: 'Kar-Wai Wong', country: 'CHN', age: 61},
  {name: 'Yimou Zhang', country: 'CHN', age: 69},
  {name: 'Hayao Miyazaki', country: 'JPN', age: 78},
  {name: 'Kaige Chen', country: 'CHN', age: 67},
  {name: 'Jean-Pierre Melville', country: 'FRA', age: 55},
  {name: 'Jean-Pierre Dardenne', country: 'BEL', age: 68},
  {name: 'Jean-Pierre Jeunet', country: 'FRA', age: 66},
  {name: 'Jean-Luc Godard', country: 'FRA', age: 88},
  {name: 'Charles Chaplin', country: 'GBR', age: 88},
  {name: 'Buster Keaton', country: 'USA', age: 70},
  {name: 'Andrei Tarkovsky', country: 'RUS', age: 54},
  {name: 'Sam Peckinpah', country: 'USA', age: 59},
  {name: 'James Cameron', country: 'USA', age: 65},
  {name: 'Anthony Minghella', country: 'GBR', age: 54},
  {name: 'Frank Capra', country: 'ITA', age: 94},
  {name: 'Orson Welles', country: 'USA', age: 70},
  {name: 'Tim Burton', country: 'USA', age: 61},
  {name: 'Jim Jarmusch', country: 'USA', age: 66},
  {name: 'Roman Polanski', country: 'POL', age: 86},
  {name: 'Bernardo Bertolucci', country: 'ITA', age: 77},
  {name: 'Krzysztof Kieslowski', country: 'POL', age: 54},
  {name: 'Sam Mendes', country: 'GBR', age: 54},
  {name: 'Michael Mann', country: 'USA', age: 76},
  {name: 'Ron Howard', country: 'USA', age: 65},
  {name: 'Gus Van Sant', country: 'USA', age: 67},
  {name: 'Paul Thomas Anderson', country: 'USA', age: 49},
  {name: 'Wes Anderson', country: 'USA', age: 50},
  {name: 'Frank Darabont', country: 'FRA', age: 60},
  {name: 'Steven Spielberg', country: 'USA', age: 72},
  {name: 'Woody Allen', country: 'USA', age: 83},
  {name: 'Quentin Tarantino', country: 'USA', age: 56},
  {name: 'Robert Rodriguez', country: 'USA', age: 51},
  {name: 'Pedro Almodóvar', country: 'ESP', age: 70},
  {name: 'Alejandro G. Iñárritu', country: 'MEX', age: 56},
  {name: 'Alfonso Cuarón', country: 'MEX', age: 57},
  {name: 'Peter Jackson', country: 'NZL', age: 57},
  {name: 'Mel Brooks', country: 'USA', age: 93},
  {name: 'Richard Brooks', country: 'USA', age: 56},
  {name: 'Howard Hawks', country: 'USA', age: 81},
  {name: 'Blake Edwards', country: 'USA', age: 88},
  {name: 'Robert Rossen', country: 'USA', age: 57},
  {name: 'Emir Kusturica', country: 'SRB', age: 64},
  {name: 'Giuseppe Tornatore', country: 'ITA', age: 63},
  {name: 'Michael Haneke', country: 'AUT', age: 77},
  {name: 'Tom Tykwer', country: 'DUE', age: 54},
  {name: 'Christopher Nolan', country: 'GBR', age: 49},
  {name: 'David Cronenberg', country: 'CAN', age: 76},
  {name: 'Joel Coen', country: 'USA', age: 64},
  {name: 'Steven Soderbergh', country: 'USA', age: 56},
  {name: 'Lars von Trier', country: 'DNK', age: 63},
  {name: 'François Truffaut', country: 'FRA', age: 52},
  {name: 'Luis Buñuel', country: 'ESP', age: 83},
  {name: 'Michelangelo Antonioni', country: 'ITA', age: 94},
  {name: 'Sydney Pollack', country: 'USA', age: 73},
  {name: 'Mike Nichols', country: 'USA', age: 83},
  {name: 'Spike Jonze', country: 'USA', age: 49},
  {name: 'Jim Sheridan', country: 'GBR', age: 70},
  {name: 'Michael Curtiz', country: 'HUN', age: 75},
  {name: 'David Lean', country: 'GBR', age: 83},
  {name: 'Ridley Scott', country: 'GBR', age: 81},
  {name: 'Takeshi Kitano', country: 'JPN', age: 72},
  {name: 'Preston Sturges', country: 'USA', age: 60},
  {name: 'Oliver Stone', country: 'USA', age: 73},
  {name: 'Milos Forman', country: 'CZE', age: 86},
  {name: 'Robert Altman', country: 'USA', age: 81},
  {name: 'Costa-Gavras', country: 'GRC', age: 86},
  {name: 'Andrzej Wajda', country: 'POL', age: 90},
  {name: 'King Vidor', country: 'USA', age: 88},
  {name: 'Carl Theodor Dreyer', country: 'DNK', age: 79},
  {name: 'F.W. Murnau', country: 'DUE', age: 42},
  {name: 'D.W. Griffith', country: 'USA', age: 73},
  {name: 'Jean Renoir', country: 'FRA', age: 84},
  {name: 'Rainer Werner Fassbinder', country: 'DUE', age: 37},
  {name: 'Mel Gibson', country: 'USA', age: 63},
  {name: 'Werner Herzog', country: 'DUE', age: 77},
  {name: 'Brian De Palma', country: 'USA', age: 79},
  {name: 'Terry Gilliam', country: 'USA', age: 78},
  {name: 'Jafar Panahi', country: 'IRN', age: 59}
]

