import { Reveal } from "../../components/farmer-motion/Reveal";

export default function MotionSensor() {
    return (
        <div style={{
            //backgroundColor: 'lightskyblue'
            display: 'grid',
            alignItems: 'center',
            justifyContent: 'center',
            justifyItems: 'center',
            marginBottom: '40vh'
        }}>
            <section style={{
                display: 'grid',
                alignItems: 'center',
                justifyContent: 'center',
                justifyItems: 'center',
                width: '100%',
                marginBottom: '40vh'
            }}>
                <Reveal>
                    <h1>Hey, I&apos;m Jonas</h1>
                </Reveal>
                <Reveal>
                    <h3>I&apos;m a Developer</h3>
                </Reveal>
                <Reveal>
                    <p>Here is some text about myself, so you can get me better to konw! </p>
                </Reveal>
                <Reveal>
                    <button>
                        Click me!
                    </button>
                </Reveal>
            </section>

            <section style={{
                display: 'grid',
                alignItems: 'center',
                justifyItems: 'center',
                justifyContent: 'center',
                width: '100%',
                marginBottom: '40vh',
                width: '50%'
            }}>
                <Reveal>
                    <h1>GoogleBot</h1>
                </Reveal>

                <Reveal>
                    <p>
                        Googlebot ist der allgemeine Name für die beiden Arten von Web-Crawlern von Google:
                    </p>
                </Reveal>
                <Reveal>
                    <ul>
                        <li>
                            Googlebot für Computer: ein Computer-Crawler, der einen Nutzer mit einem Computer simuliert
                        </li>
                        <li>
                            Googlebot für Smartphones: ein mobiler Crawler, der einen Nutzer mit einem Mobilgerät simuliert
                        </li>
                    </ul>
                </Reveal>
                <Reveal>
                    <p>
                        In der Anfrage im User-Agent-String siehst du, um welchen der beiden es sich handelt. Allerdings gilt für beide Crawler-Typen das gleiche Produkt-Token (User-Agent-Token) in der Datei „robots.txt“ und es ist nicht möglich, gezielt den Googlebot für Computer oder den Googlebot für Smartphones auszuwählen.
                    </p>
                </Reveal>

                <Reveal>
                    <p>
                        Bei den meisten Websites indexiert Google in erster Linie die mobile Version der Inhalte. Somit erfolgt die Mehrheit der Googlebot-Crawling-Anfragen über den mobilen Crawler und nur eine Minderheit über den Computer-Crawler.
                    </p>
                </Reveal>

                <Reveal>
                    <h2>
                        So greift der Googlebot auf deine Website zu
                    </h2>
                </Reveal>

                <Reveal>
                    <p>
                        In den meisten Fällen greift der Googlebot im Durchschnitt nur einmal alle paar Sekunden auf deine Website zu. Aufgrund von Verzögerungen kann die Frequenz über kurze Zeiträume gesehen jedoch höher erscheinen.
                    </p>
                </Reveal>

                <Reveal>
                    <p>
                        Der Googlebot wurde so entwickelt, dass er gleichzeitig über Tausende Computer ausgeführt werden kann, um so analog zum Wachstum des Webs seine Leistung und Abdeckung zu erhöhen. Damit nicht unnötig Bandbreite beansprucht wird, führen wir viele Crawler auf Computern aus, die sich in der Nähe der Websites befinden, die sie crawlen. Aus diesem Grund weisen deine Protokolle bei google.com eventuell Aufrufe von verschiedenen IP-Adressen mit dem User-Agent „Googlebot“ auf. Wir bemühen uns, bei jedem Besuch möglichst viele Seiten deiner Website zu crawlen, ohne dass dein Server zu sehr beansprucht wird. Wenn deine Website nicht mit den Crawling-Anfragen von Google mithalten kann, kannst du die Crawling-Frequenz verringern.
                    </p>
                </Reveal>

                <Reveal>
                    <p>
                        Der Googlebot crawlt in erster Linie von IP-Adressen in den USA. Wenn der Googlebot erkennt, dass eine Website Anfragen aus den USA blockiert, kann er versuchen, über IP-Adressen in anderen Ländern zu crawlen. Die Liste der aktuell vom Googlebot verwendeten IP-Adressblöcke ist im JSON-Format verfügbar.
                    </p>
                </Reveal>

                <Reveal>
                    <p>
                        Der Googlebot crawlt über HTTP/1.1 und, sofern von der Website unterstützt, über HTTP/2. Welche Protokollversion zum Crawlen deiner Website verwendet wird, hat Auswirkungen auf das Ranking. Durch das Crawlen über HTTP/2 können jedoch Rechenressourcen (wie CPU und RAM) für deine Website und den Googlebot eingespart werden.
                        Wenn du das Crawling über HTTP/2 deaktivieren möchtest, weise den Server, der deine Website hostet, an, mit einem HTTP-Statuscode 421 zu antworten, wenn der Googlebot versucht, deine Website über HTTP/2 zu crawlen. Falls dies nicht möglich ist, kannst du eine Nachricht an das Googlebot-Team senden. Das ist allerdings nur eine temporäre Lösung.
                    </p>
                </Reveal>

                <Reveal>
                    <p>
                        Der Googlebot kann die ersten 15 MB in einer HTML-Datei oder in einer unterstützten textbasierten Datei crawlen. Jede im HTML-Code referenzierte Ressource wie CSS und JavaScript wird separat abgerufen und jeder Abruf ist an die gleiche Beschränkung der Dateigröße gebunden. Nach den ersten 15 MB der Datei beendet der Googlebot das Crawling und berücksichtigt nur die ersten 15 MB der Datei für die Indexierung. Die Beschränkung der Dateigröße gilt für die unkomprimierten Daten. Für andere Google-Crawler wie den Googlebot für Videos und den Googlebot für Bilder gelten möglicherweise andere Beschränkungen.
                    </p>
                </Reveal>

                <Reveal>
                    <p>
                        Beim Crawlen von IP-Adressen in den USA ist die Zeitzone des Googlebots Pacific Time.
                    </p>
                </Reveal>
                <Reveal>
                    <h2>
                        Googlebot für das Crawlen deiner Website blockieren
                    </h2>
                </Reveal>

                <Reveal>
                    <p>
                        Es ist praktisch unmöglich, einen Webserver geheim zu halten, indem du keine Links zu ihm veröffentlichst. Sobald beispielsweise jemand einem Link von deinem „geheimen“ Server zu einem anderen Server folgt, kommt deine „geheime“ URL im Verweis-Tag vor und kann von dem anderen Webserver in dessen Verweisprotokoll gespeichert und veröffentlicht werden. Außerdem gibt es im Web zahlreiche veraltete und fehlerhafte Links. Sollte jemand einen falschen Link zu deiner Website veröffentlichen oder die Links nicht aktualisieren, wenn sich auf deinem Server etwas ändert, versucht der Googlebot, einen falschen Link von deiner Website aus zu crawlen.
                    </p>
                </Reveal>

                <Reveal>
                    <p>
                        Wenn du nicht möchtest, dass der Googlebot Inhalte auf deiner Website crawlt, hast du verschiedene Möglichkeiten. Du kannst entweder verhindern, dass der Googlebot eine Seite crawlt, dass er sie indexiert oder dass sowohl Crawler als auch Nutzer überhaupt auf die Seite zugreifen können.
                    </p>
                </Reveal>

                <Reveal>
                    <h2>Googlebot überprüfen</h2>
                </Reveal>

                <Reveal>
                    <p>
                        Bevor du dich dazu entscheidest, den Googlebot zu blockieren, solltest du wissen, dass der vom Googlebot verwendete User-Agent-String oftmals von anderen Crawlern gefälscht wird. Es ist wichtig, zu prüfen, ob eine problematische Anfrage tatsächlich vom Googlebot stammt. Die beste Möglichkeit, das zu prüfen, besteht darin, einen umgekehrten DNS-Lookup für die Quell-IP der Anfrage zu verwenden oder die Quell-IP mit den IP-Bereichen des Googlebots zu vergleichen.
                    </p>
                </Reveal>

            </section>

        </div>
    );
}