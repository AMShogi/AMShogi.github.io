import random
players = input("Enter players:\n").split()

lower_seed_1 = players[0]
lower_seed_2 = players[1]

remaining_players = sorted(players[2:])

bye_player = random.choice(remaining_players)

remaining_players.remove(bye_player)

random.shuffle(remaining_players)

pairings = []
for i in range(0, len(remaining_players), 2):
    pairings.append((remaining_players[i], remaining_players[i + 1]))

print('/n' + 'bye player:', bye_player)

print("\n" + 'Random Pairings')
for p1, p2 in pairings:
    print(f"{p1} vs {p2}")