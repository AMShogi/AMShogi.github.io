def handicap_input(message):
    rank_input = input(message).lower()
    rank = "".join(filter(str.isdigit, rank_input))
    if "dan" in rank_input:
        return int(rank) + 14
    elif "kyu" in rank_input:
        return abs(int(rank) - 15)
    raise Exception("Rank does not contain 'kyu' or 'dan'")

def handicap_calc():
    p1 = handicap_input("Enter Player 1 rank: ")
    p2 = handicap_input("Enter Player 2 rank: ")

    uwate = p1 if p1 > p2 else p2
    shitate = p2 if p1 > p2 else p1

    handicap_dict = {
        "0": "No handicap",
        "1": "Sente",
        "2": "Lance",
        "3": "Bishop",
        "4": "Rook",
        "5": "Rook + Lance",
        "6,7": "2-piece",
        "8,9": "4-piece",
        "10": "6-piece",
        "11": "8-Piece",
        "12": "10-Piece",
        "13": "3 Pawns",
        "14,15": "Naked King",
    }

    rank_diff = str(uwate - shitate)
    for key, value in handicap_dict.items():
        if rank_diff in key:
            print("Rank difference:", rank_diff)
            print("Handicap: " + value)
            return

    raise Exception("Could not find handicap for rank difference " + rank_diff)


handicap_calc()