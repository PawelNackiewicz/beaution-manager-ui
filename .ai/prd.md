## PRD – MVP aplikacji SaaS do zarządzania salonem kosmetycznym

### 1. Cel produktu

Stworzyć wewnętrzny system do zarządzania jednym salonem kosmetycznym, umożliwiający obsługę wizyt, klientów, pracowników, usług, magazynu oraz podstawowych raportów finansowych.

Produkt ma być dostępny jako aplikacja webowa z planem rozszerzenia o natywne aplikacje mobilne.

### 2. Grupa użytkowników

- **Właściciel salonu**
- **Pracownicy salonu** (kosmetolodzy, recepcja)

### 3. Zakres MVP (high-level)

MVP obejmuje następujące moduły:

- **Kalendarz i zarządzanie wizytami**
- **Moduł klientów**
- **Moduł usług**
- **Moduł pracowników i uprawnień**
- **Moduł magazynowy**
- **Raporty podstawowe**
- **Ustawienia salonu**
- **Powiadomienia SMS/e-mail**
- **Kampanie reklamowe**

### 4. Wymagania funkcjonalne

#### 4.1. Kalendarz i wizyty

**Funkcjonalności:**

- Widok dzienny / tygodniowy
- Tworzenie wizyty: wybór klienta, pracownika, usługi, daty i godziny
- Edycja i przenoszenie wizyt (drag & drop – jeśli narzędzie projektowe to wspiera)
- Anulowanie wizyt
- Oznaczanie wizyty jako „zrealizowana”
- Po finalizacji wizyty: możliwość wyboru sposobu płatności (gotówka / karta / przelew / inne — lista konfigurowalna)
- Wyświetlanie dostępności pracowników zgodnie z grafikami

**Stany wizyty:**

- zaplanowana
- potwierdzona (opcjonalnie)
- zrealizowana
- anulowana

#### 4.2. Moduł klientów

**Funkcjonalności:**

- Lista klientów
- Dane kontaktowe: imię, nazwisko, numer telefonu
- Historia wizyt
- Notatki o klientach (preferencje, przeciwwskazania)
- Tagowanie klientów (opcjonalnie, jako prosta lista tagów tekstowych)

#### 4.3. Moduł usług

**Funkcjonalności:**

- Lista usług wraz z ceną, czasem trwania i opisem
- Możliwość dezaktywacji usługi (nie pokazuje się w formularzu tworzenia wizyty)
- Kategoryzacja usług (np. Paznokcie, Stylizacja brwi, Masaże) – prosta kategoria tekstowa

#### 4.4. Moduł pracowników

**Funkcjonalności:**

- Lista pracowników
- Dane podstawowe pracowników

**Role i uprawnienia (minimum):**

- **Owner** – pełny dostęp
- **Employee** – ograniczony dostęp (bez raportów, bez ustawień, bez magazynu)

**Grafik pracy:**

- Ustawianie godzin pracy w tygodniu
- Definiowanie, jakie usługi pracownik może wykonywać

#### 4.5. Moduł magazynowy

**Funkcjonalności:**

- Lista produktów (kosmetyków)
- Stan magazynowy (ilości)
- Historia ruchów magazynowych (przyjęcia, zużycia)
- Powiązanie usług z produktami (opcjonalnie — powiązanie 1..n z określaną ilością zużycia)
- Alerty o niskich stanach (proste powiadomienie w aplikacji)

#### 4.6. Raporty

**Minimalne raporty w MVP:**

- **Obroty miesięczne**
  - suma przychodów z wizyt zrealizowanych w danym miesiącu
  - filtry: pracownik, usługa
- **Zysk z usług**
  - przychód – koszt zużytych produktów (opcjonalne uproszczenie: koszt jednostkowy \* ilość zużyta)

**Format raportów:**

- tabela + prosty wykres (opcjonalnie)
- eksport CSV

#### 4.7. Ustawienia salonu

- Godziny otwarcia
- Dane salonu (nazwa, adres, numer telefonu, logo)
- Konfiguracja metod płatności (lista tekstowa)
- Konfiguracja powiadomień (włączenie/wyłączenie SMS/e-mail)

#### 4.8. Powiadomienia

**Funkcjonalności:**

Powiadomienia SMS lub e-mail:

- przypomnienie o wizycie (np. 24h przed)
- potwierdzenie utworzenia wizyty

Uwaga: w MVP mogą to być webhooki lub stub, bez faktycznej integracji z dostawcą (w zależności od potrzeb projektu generatora).

### 5. Wymagania niefunkcjonalne

- Rola **Owner** musi mieć dostęp do wszystkich danych.
- Rola **Employee** ma dostęp jedynie do:
  - kalendarza,
  - swoich wizyt,
  - klientów,
  - usług,
  - tworzenia i finalizacji wizyt.

### 6. Zakres wyłączony (poza MVP)

- Rezerwacje online dla klientów zewnętrznych
- Płatności online (Stripe/PayU itd.)
- Program lojalnościowy
- Zaawansowane raporty finansowe
- Integracje z kasą fiskalną
- Zaawansowane statystyki dla pracowników

### 7. Kryteria sukcesu MVP

- Właściciel salonu może zarządzać wizytami, pracownikami, usługami, magazynem i raportami.
- Pracownik może obsługiwać kalendarz oraz swoich klientów.
- System generuje poprawne miesięczne raporty obrotów i zysków.
- Przypomnienia o wizytach są wysyłane (lub logowane jako symulacja w stubach).
- Kalendarz pozwala na swobodne prowadzenie salonu bez użycia dodatkowych narzędzi.
