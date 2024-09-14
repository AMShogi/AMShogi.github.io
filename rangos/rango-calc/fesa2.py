K_FACTORS = (
    (720, 40),
    (1040, 36),
    (1280, 32),
    (1560, 28),
    (1920, 24),
    (2240, 20),
    (9999, 16),
)

def get_elo(tr, games, results):
    for r, kr in K_FACTORS:
        if tr < r:
            k = kr
            break
    else:
        raise ValueError("Invalid rating")
    change = 0
    for or_, res in results:
        ev = 1 / (1 + 10**((or_ - tr) / 400))
        change += k * max(res - ev, (or_ - tr) / 160 if res == 1 else -ev)
        if games < 100:
            change += max(1800 - tr, 0) / 200
    return round(tr + change)

def main():
    myelo = int(input("Player Elo: "))
    mygames = int(input("Player games: "))
    results = []
    
    for _ in range(10):  # Loop runs a maximum of 10 times
        try:
            oppelo = int(input("Opponent Elo: "))
            result = int(input("Result: "))
            results.append((oppelo, result))
        except ValueError:
            break
    
    print("New Elo: {}".format(get_elo(myelo, mygames, results)))

if __name__ == '__main__':
    main()
