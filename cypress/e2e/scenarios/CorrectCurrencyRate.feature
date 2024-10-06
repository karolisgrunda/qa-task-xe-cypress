Feature: Currency table shows correct currency rates
    Scenario: I see correct <mainCurrency> rate in <date> for <currency>
        Given I am on a currency tables page
        Given Introduction text is visible
        When I input currency <mainCurrency> and date <date>
        When I confirm form
        Then I see <currency> which name is <currencyName> unit per <unitsPer> and per unit <perUnit>
    Examples:
    |mainCurrency  |date             |currency   | currencyName      |unitsPer                |perUnit                |
    |"EUR"         |"2023-02-01"     |"USD"      | "US Dollar"       |"1.0918121631244302"    |"0.9159084628058255"   |
    |"EUR"         |"2023-02-01"     |"EUR"      | "Euro"            |"1"                     |"1"                    |
    |"EUR"         |"2023-02-01"     |"GBP"      | "British Pound"   |"0.8871386636267415"    |"1.1272194990486224"   |
    |"EUR"         |"2023-02-01"     |"INR"      | "Indian Rupee"    |"89.3631266051888"      |"0.00000000000000000"  |
    |"EUR"         |"2023-02-01"     |"INR"      | "Indian Rupee"    |"0.00000000000000000"   |"0.01119029781061774"  |
    |"EUR"         |"2023-02-01"     |"GBP"      | "Something"       |"89.3631266051888"      |"0.01119029781061774"  |