import random

# Read players from players.txt
with open("torneos/python/players.txt", "r") as file:
    players = file.read().split('\n')

first_five = sorted(players[:5])

lower_seeds = random.sample(first_five, 4)

remaining_players = [p for p in players if p not in lower_seeds]

remaining_players.sort()

bye_players = random.sample(remaining_players, 2)

for player in bye_players:
    remaining_players.remove(player)

random.shuffle(remaining_players)

random.shuffle(lower_seeds)
lower_seed_matches = [
    (lower_seeds[0], lower_seeds[1]),
    (lower_seeds[2], lower_seeds[3])
]

pairings = []
for i in range(0, len(remaining_players), 2):
    pairings.append((remaining_players[i], remaining_players[i + 1]))

# Output
print("Lower seeds")
for p1, p2 in lower_seed_matches:
    print(f"{p1} vs {p2}")

print("\nBye players")
for player in bye_players:
    print(player)

print("\nMain pairings")
for p1, p2 in pairings:
    print(f"{p1} vs {p2}")