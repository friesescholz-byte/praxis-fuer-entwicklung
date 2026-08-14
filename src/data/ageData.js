import { MEDIA } from '../constants/media';

export const AGE_GROUPS = [
  {
    id: 'babies',
    tabLabel: '0 – 12 Monate',
    title: 'Säuglinge: Der sanfte Start in eine gesunde Aufrichtung',
    badge: 'Frühförderung & Aufrichtung',
    image: MEDIA.toddlerUnder3,
    imageAlt: 'Säugling & Kleinkind in der Praxis für Entwicklung',
    caption: 'Frühe Haltungsmuster spielerisch und sanft harmonisieren',
    problems: [
      'Baby überstreckt sich häufig nach hinten (C-Haltung) oder liegt asymmetrisch',
      'Starkes Weinen, Unruhe oder Trink- und Schluckschwierigkeiten',
      'Ausgeprägte Abneigung gegen die Bauchlage / Kopf heben fällt schwer',
      'Verzögertes Drehen, Robben oder Krabbeln'
    ],
    solution: {
      headline: 'Wie PäPKi® im ersten Lebensjahr hilft:',
      description: 'Durch eine sanfte Überprüfung der frühkindlichen Reflexe und Muskelspannungen spüren wir Blockaden im natürlichen Aufrichtungsprozess auf. Eltern lernen gezielte Lagerungs- und Handlingtechniken für den Alltag, die das Nervensystem sofort beruhigen.',
      impact: 'Das Baby findet zurück in die Entspannung, schläft ruhiger und baut eine stabile Körpersymmetrie auf.'
    }
  },
  {
    id: 'toddlers',
    tabLabel: '1 – 3 Jahre',
    title: 'Kleinkinder: Sichere Schritte & motorische Meilensteine',
    badge: 'Laufen & Koordination',
    image: MEDIA.babyBoyPraxis,
    imageAlt: 'Kleinkind & Junge bei der PäPKi Diagnostik in der Praxis',
    caption: 'Stabile Muskelketten für ein sicheres Gangbild',
    problems: [
      'Das Krabbeln wurde übersprungen (direktes Hochziehen zum Stehen)',
      'Auffälliges Gangbild: Häufiges Stolpern, Zehenspitzengang oder O-Beine',
      'Unsicherheit beim Klettern, Treppensteigen oder unruhiger Stand',
      'Aussagen wie „Das wächst sich aus“, während Eltern Unsicherheit spüren'
    ],
    solution: {
      headline: 'Wie PäPKi® bei Kleinkindern ansetzt:',
      description: 'Fehlende Entwicklungsstufen (wie das wichtige Überkreuz-Muster beim Krabbeln) werden durch spielerische Bodenübungen auf neurophysiologischer Ebene nachgeholt. Dies vernetzt die beiden Gehirnhälften und stärkt die Tiefensensibilität.',
      impact: 'Körperliche Sicherheit, stabiler Gleichgewichtssinn und die beste Prävention gegen spätere Haltungsschäden.'
    }
  },
  {
    id: 'preschool',
    tabLabel: '3 – 6 Jahre',
    title: 'Vorschulkinder: Feinmotorik & Schulreife ohne Druck',
    badge: 'Schulvorbereitung & Feinmotorik',
    image: MEDIA.childWriting6,
    imageAlt: '6-jähriges Kind beim entspannten Malen und Schreiben',
    caption: 'Auge-Hand-Koordination und Stifthaltung stärken',
    problems: [
      'Verkrampfte Stifthaltung, Frustration beim Malen, Schneiden oder Basteln',
      'Stillsitzen fällt schwer – ständiges Zappeln oder Abstützen',
      'Emotionale Ausbrüche, niedrige Frustrationstoleranz oder Trennungsängste',
      'Gleichgewichtsprobleme (Laufrad- oder Fahrradfahren gelingt schwer)'
    ],
    solution: {
      headline: 'Wie PäPKi® auf den Schulstart vorbereitet:',
      description: 'Wir überprüfen, ob frühkindliche Reflexe noch aktiv sind, die das Kind unbewusst Kraft kosten. Durch 10–15 Minuten gezielte Bodenübungen am Tag trainieren wir die Rumpfaufrichtung und befreien die Hände für feinmotorische Leichtigkeit.',
      impact: 'Das Kind startet mit Selbstvertrauen, Freude am Lernen und gelöster Stifthaltung in die 1. Klasse.'
    }
  },
  {
    id: 'school',
    tabLabel: '6 – 12 Jahre',
    title: 'Schulkinder: Konzentration & Freude am Lernen zurückgewinnen',
    badge: 'Lern- & Konzentrationsförderung',
    image: MEDIA.kathrinWithChild7,
    imageAlt: 'Kathrin Raddatz begleitet ein Kind bei der PäPKi Therapie',
    caption: 'Individuelle Begleitung für sichtbare Schulerfolge',
    problems: [
      'Täglicher Kampf und Tränen bei den Hausaufgaben',
      'Konzentrationsschwäche, leichte Ablenkbarkeit (Verdacht auf ADS/ADHS)',
      'Schwierigkeiten beim Lesen, Schreiben oder Rechnen (LRS / Dyskalkulie)',
      'Kind rutscht auf dem Stuhl herum, ermüdet schnell und verliert das Selbstwertgefühl'
    ],
    solution: {
      headline: 'Warum Nachhilfe oft scheitert & was wir anders machen:',
      description: 'Wenn das neuromotorische Fundament wackelt, muss das Gehirn fast die gesamte Energie für das Aufrechthalten des Körpers aufbringen – für Konzentration bleibt keine Kraft. Wir lösen die Ursache: Durch die PäPKi® Bodenübungen wird das Nervensystem entlastet.',
      impact: 'Hausaufgaben ohne Tränen, gestärkter Selbstwert, verbesserte Noten und wieder Harmonie in der Familie.'
    }
  },
  {
    id: 'teens',
    tabLabel: '12 – 18 Jahre',
    title: 'Jugendliche: Starke Haltung, Prüfungsstärke & Stressabbau',
    badge: 'Teenager & Mentale Balance',
    image: MEDIA.childWriting10,
    imageAlt: 'Jugendliche bei der gezielten Förderung und Konzentration',
    caption: 'Aufrechte Haltung und mentale Belastbarkeit bis zum Abschluss',
    problems: [
      'Haltungsschwächen: Rundrücken, Hohlkreuz, chronische Nacken- oder Kopfschmerzen',
      'Starker Prüfungsstress, Blackouts, Leistungsabfall in der weiterführenden Schule',
      'Chronische Erschöpfung, Antriebslosigkeit oder Reizüberflutung durch Bildschirme',
      'Koordinationsschwierigkeiten oder wiederkehrende Überlastungen im Sport'
    ],
    solution: {
      headline: 'Wie PäPKi® Jugendliche stärkt:',
      description: 'Jugendliche erhalten ein klares, wissenschaftlich fundiertes Bewegungsprogramm, das sie eigenverantwortlich durchführen können. Es richtet die Wirbelsäule von innen auf und reguliert das autonome Nervensystem bei Schul- und Prüfungsstress.',
      impact: 'Souveräne Körperhaltung, mentale Resilienz in Prüfungssituationen und schmerzfreie Bewegungsabläufe.'
    }
  }
];
