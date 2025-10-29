# ===============================
# 1. TABELA DE PREÇOS (LOOPS ANINHADOS)
# ===============================

lojas = ["Loja A", "Loja B", "Loja C"]
precos = [
    [10.50, 20.30, 30.00],
    [15.00, 25.50, 35.90],
    [12.75, 22.10, 32.80]
]

for i in range(len(lojas)):
    print(f"\n{lojas[i]}:")
    for preco in precos[i]:
        print(f"R$ {preco:.2f}")




# ===============================
# 2. JOGO DA VELHA
# ===============================

def exibir_tabuleiro(tabuleiro):
    for linha in tabuleiro:
        print(" | ".join(linha))
        print("-" * 9)

def verificar_vitoria(tabuleiro, jogador):
    # Verifica linhas, colunas e diagonais
    for i in range(3):
        if all(tabuleiro[i][j] == jogador for j in range(3)):
            return True
        if all(tabuleiro[j][i] == jogador for j in range(3)):
            return True
    if all(tabuleiro[i][i] == jogador for i in range(3)):
        return True
    if all(tabuleiro[i][2 - i] == jogador for i in range(3)):
        return True
    return False

tabuleiro = [[" " for _ in range(3)] for _ in range(3)]
jogador_atual = "X"
jogadas = 0

while True:
    exibir_tabuleiro(tabuleiro)
    print(f"Vez do jogador {jogador_atual}")
    linha = int(input("Digite a linha (0, 1 ou 2): "))
    coluna = int(input("Digite a coluna (0, 1 ou 2): "))

    if tabuleiro[linha][coluna] != " ":
        print("Posição ocupada! Tente novamente.")
        continue

    tabuleiro[linha][coluna] = jogador_atual
    jogadas += 1

    if verificar_vitoria(tabuleiro, jogador_atual):
        exibir_tabuleiro(tabuleiro)
        print(f"Jogador {jogador_atual} venceu!")
        break

    if jogadas == 9:
        exibir_tabuleiro(tabuleiro)
        print("Empate!")
        break

    jogador_atual = "O" if jogador_atual == "X" else "X"




# ===============================
# 3. JOGO DE ADIVINHAÇÃO (LOOPS COM MÚLTIPLAS CONDIÇÕES)
# ===============================

import random

numero_secreto = random.randint(1, 10)
tentativas = 0
max_tentativas = 5
palpite = 0

while palpite != numero_secreto and tentativas < max_tentativas:
    palpite = int(input("Adivinhe o número (1 a 10): "))
    tentativas += 1

    if palpite == numero_secreto:
        print("Parabéns! Você acertou!")
        break
    else:
        print("Errado! Tente novamente.")

if palpite != numero_secreto:
    print(f"Suas tentativas acabaram. O número era {numero_secreto}.")




# ===============================
# 4. SISTEMA DE LOGIN (TEMPO E TENTATIVAS)
# ===============================

import time

senha_correta = "1234"
tentativas = 3
tempo_limite = 30
inicio = time.time()

while tentativas > 0 and (time.time() - inicio) < tempo_limite:
    senha = input("Digite a senha: ")

    if senha == senha_correta:
        print("Acesso permitido. Bem-vindo!")
        break
    else:
        tentativas -= 1
        print(f"Senha incorreta! Tentativas restantes: {tentativas}")

if senha != senha_correta:
    if (time.time() - inicio) >= tempo_limite:
        print("Tempo esgotado! Acesso negado.")
    else:
        print("Número de tentativas esgotado! Acesso negado.")




# ===============================
# 5. JOGO DA FORCA SIMPLES (CONTROLE DE FLUXO)
# ===============================

palavra = "python"
letras_descobertas = ["_"] * len(palavra)
tentativas = 6

while tentativas > 0:
    print("Palavra:", " ".join(letras_descobertas))
    letra = input("Digite uma letra: ")

    if letra in palavra:
        for i in range(len(palavra)):
            if palavra[i] == letra:
                letras_descobertas[i] = letra
        print("Acertou!")
    else:
        tentativas -= 1
        print("Errou! Tentativas restantes:", tentativas)

    if "_" not in letras_descobertas:
        print("Parabéns! Você descobriu a palavra:", palavra)
        break

    if tentativas == 0:
        print("Suas tentativas acabaram. A palavra era:", palavra)




# ===============================
# 6. JOGO DA FORCA COM BONECO
# ===============================

palavra = "python"
letras_descobertas = ["_"] * len(palavra)
tentativas = 6

desenhos = [
    """
     -----
     |   |
     O   |
         |
         |
    =========
    """,
    """
     -----
     |   |
     O   |
     |   |
         |
    =========
    """,
    """
     -----
     |   |
     O   |
    /|   |
         |
    =========
    """,
    """
     -----
     |   |
     O   |
    /|\\  |
         |
    =========
    """,
    """
     -----
     |   |
     O   |
    /|\\  |
    /    |
    =========
    """,
    """
     -----
     |   |
     O   |
    /|\\  |
    / \\  |
    =========
    """
]

erros = 0

while tentativas > 0:
    print(desenhos[erros])
    print("Palavra:", " ".join(letras_descobertas))
    letra = input("Digite uma letra: ")

    if letra in palavra and letra not in letras_descobertas:
        for i in range(len(palavra)):
            if palavra[i] == letra:
                letras_descobertas[i] = letra
        print("Acertou!")
    elif letra in letras_descobertas:
        print("Você já digitou essa letra.")
    else:
        tentativas -= 1
        erros += 1
        print("Errou! Tentativas restantes:", tentativas)

    if "_" not in letras_descobertas:
        print("Parabéns! Você descobriu a palavra:", palavra)
        break

    if tentativas == 0:
        print(desenhos[-1])
        print("Você perdeu! A palavra era:", palavra)
