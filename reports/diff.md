# Informe de carga — staging vs data/bikes.csv

Generado: 2026-10-05 18:32. `data/bikes.csv` no se ha modificado.

| Marca | Estado | Modelos | Tallas | Familias | Con altura | Con precio € | Motivo / avisos |
|---|---|---:|---:|---:|---:|---:|---|
| Giant | con avisos | 38 | 212 | 11 | 176 | 37 | 3 productos sin datos |
| Merida | con avisos | 65 | 285 | 36 | 0 | 0 | 10 avisos |
| Trek | con avisos | 148 | 643 | 61 | 549 | 148 | 5 productos sin datos; 330 avisos |
| Specialized | con avisos | 96 | 556 | 34 | 328 | 96 | 5 productos sin datos; 33 tallas rechazadas; 39 avisos |
| Scott | con avisos | 77 | 389 | 26 | 0 | 54 | 9 productos sin datos; 9 tallas rechazadas; 2 avisos |
| Canyon | OK | 96 | 556 | 40 | 556 | 96 |  |
| Cube | con avisos | 78 | 376 | 22 | 0 | 78 | 139 tallas rechazadas; 50 avisos |
| Bianchi | con avisos | 33 | 179 | 13 | 0 | 30 | 38 tallas rechazadas |
| Cannondale | con avisos | 80 | 433 | 27 | 0 | 80 | 19 productos sin datos; 150 avisos |
| Cervélo | OK | 7 | 42 | 7 | 0 | 0 |  |
| Focus | OK | 30 | 147 | 11 | 0 | 30 |  |
| Santa Cruz | con avisos | 82 | 411 | 16 | 90 | 82 | 8 tallas rechazadas; 110 avisos |
| Lapierre | con avisos | 57 | 270 | 21 | 0 | 57 | 2 productos sin datos; 38 tallas rechazadas |
| Ghost | con avisos | 39 | 157 | 17 | 0 | 39 | 1 avisos |
| Haibike | con avisos | 29 | 112 | 14 | 0 | 29 | 1 productos sin datos; 13 tallas rechazadas; 1 avisos |
| Orbea | con avisos | 85 | 405 | 19 | 402 | 85 | 16 productos sin datos |
| BH | con avisos | 84 | 355 | 30 | 0 | 65 | 2 productos sin datos |
| Mondraker | con avisos | 46 | 210 | 18 | 0 | 46 | 14 tallas rechazadas; 8 avisos |
| MMR | OK | 58 | 236 | 19 | 236 | 58 |  |
| Megamo | con avisos | 87 | 373 | 19 | 179 | 87 | 22 productos sin datos |
| Berria | con avisos | 34 | 156 | 10 | 156 | 34 | 1 productos sin datos; 2 tallas rechazadas |
| Massi | con avisos | 68 | 296 | 12 | 0 | 0 | 84 tallas rechazadas |
| Conor | con avisos | 30 | 115 | 11 | 0 | 30 | 1 productos sin datos; 3 tallas rechazadas |
| Coluer | con avisos | 29 | 97 | 14 | 0 | 29 | 6 productos sin datos |
| Decathlon | bloqueada | 0 | 0 | 0 | 0 | 0 | no se encontraron productos (sitemap/listado/JSON) |
| KTM | con avisos | 108 | 477 | 32 | 0 | 108 | 4 productos sin datos |
| Pinarello | con avisos | 28 | 212 | 9 | 0 | 0 | 55 tallas rechazadas |
| Colnago | con avisos | 13 | 82 | 8 | 0 | 5 | 3 productos sin datos |
| Wilier | con avisos | 30 | 156 | 24 | 0 | 30 | 1 productos sin datos |
| Basso | OK | 6 | 39 | 6 | 0 | 0 |  |
| 3T | con avisos | 20 | 86 | 3 | 56 | 20 | 18 productos sin datos; 6 avisos |
| Aurum | OK | 3 | 15 | 3 | 15 | 3 |  |
| Ridley | bloqueada | 0 | 0 | 0 | 0 | 0 | sin filas válidas: sin tabla de geometría en la página; 26 productos sin datos |
| BMC | OK | 37 | 208 | 20 | 208 | 37 |  |
| Factor | OK | 9 | 51 | 9 | 0 | 0 |  |
| Look | con avisos | 11 | 56 | 5 | 0 | 10 | 2 productos sin datos |
| Argon 18 | con avisos | 11 | 65 | 5 | 0 | 0 | 9 productos sin datos; 1 tallas rechazadas; 22 avisos |

Columnas: *Tallas* = filas (modelo × talla); *Con altura* = tallas con rango de altura publicado; *Con precio €* = modelos con precio oficial en euros.


## Giant — con avisos

Diff con bikes.csv: **+212** tallas nuevas, **−0** que desaparecen, **~0** con cambios. Productos candidatos: 45. Métodos: html. Descargas: {'httpx': 0, 'browser': 0, 'cache': 45, 'challenges': 0}.

| Familia | Cat. | Tallas | Stack | Reach | Altura (cm) | Modelos (precio €) |
|---|---|---|---|---|---|---|
| Defy [f642dcfc] | carretera | XS · S · M · ML · L · XL | 527 · 541 · 558 · 577 · 596 · 615 | 369 · 375 · 380 · 384 · 393 · 402 | 160–168 · 166–174 · 172–180 · 178–186 · 184–192 · 190–198 | Defy Advanced 1 (3399); Defy Advanced 2 (2599); Defy Advanced 4 (1999); Defy Advanced Pro 0 (6399); Defy Advanced Pro 1 (4999); Defy Advanced-Ui2 (4599) |
| Propel Advanced SL [a1ffff6b] | carretera | XS · S · M · M/L · L · XL | 515 · 530 · 546 · 565 · 582 · 596 | 377 · 383 · 388 · 392 · 402 · 412 | 157–169 · 165–175 · 171–181 · 177–187 · 183–193 · 189–199 | Propel Advanced SL 0-DA (11399); Propel Advanced SL 0-Red (11999); Propel Advanced SL 1 (8249) |
| Propel Advanced [6b535a60] | carretera | XS · S · M · M/L · L · XL | 515 · 530 · 546 · 565 · 582 · 596 | 377 · 383 · 388 · 392 · 402 · 412 | 157–169 · 165–175 · 171–181 · 177–187 · 183–193 · 189–199 | Propel Advanced 0 (4599); Propel Advanced 1 (4199); Propel Advanced 2 (2799); Propel Advanced Pro 0-AXS (6599); Propel Advanced Pro 0-Di2 (6599); Propel Advanced Pro 1-AXS (5399); Propel Advanced Pro 1-Di2 (5399); Propel Advanced Pro-DA (7999) |
| Revolt Advanced SL [c21dc431] | gravel | XS · S · M · ML · L · XL | 525 · 536 · 557 · 573 · 592 · 616 | 389 · 391 · 395 · 401 · 410 · 413 | 155–166 · 159–171 · 169–181 · 174–186 · 179–191 · 189–200 | Revolt Advanced SL 0 (9999); Revolt Advanced SL 1 (7599); Revolt Advanced SL 2 (6599) |
| Stance E+ [479db880] | emtb | S · M · L · XL | 614 · 628 · 641 · 655 | 431 · 455 · 480 · 505 | 162–174 · 168–184 · 178–192 · 184–200 | Stance E+ 0 (5499); Stance E+ 1 (4499); Stance E+ 2 (3999) |
| TCR Advanced SL [eab74205] | carretera | XS · S · M · ML · L · XL | 517 · 528 · 545 · 562 · 581 · 596 | 376 · 383 · 388 · 393 · 402 · 412 | 157–169 · 165–175 · 171–181 · 177–187 · 183–193 · 189–199 | TCR Advanced SL 0-Red (11799); TCR Advanced SL 1 (s/p) |
| TCR Advanced [90368236] | carretera | XS · S · M · ML · L · XL | 517 · 528 · 545 · 562 · 581 · 596 | 376 · 383 · 388 · 393 · 402 · 412 | — · — · — · — · — · — | TCR Advanced 1 - Pro Compact (3299); TCR Advanced Pro 0-Di2 (6199); TCR Advanced SL 0-DA (11799) |
| TCR [792ed56c] | carretera | XS · S · M · ML · L · XL | 517 · 528 · 545 · 562 · 581 · 596 | 376 · 383 · 388 · 393 · 402 · 412 | 157–169 · 165–175 · 171–181 · 177–187 · 183–193 · 189–199 | TCR Advanced 0-PC (3899); TCR Advanced 2-PC (2599); TCR Advanced Pro (Dura-Ace) (7999); TCR Advanced-Ui2 (4599) |
| Talon 3 [ae856deb] | mtb | XS (27.5") · S (27.5") · S (29") · M (29") · L (29") · XL (29") | 548 · 548 · 597 · 606 · 625 · 638 | 385 · 405 · 415 · 435 · 455 · 475 | — · — · — · — · — · — | Talon 3 (699) |
| Talon E+ [6d053af7] | emtb | S · M · L · XL | 613 · 627 · 641 · 655 | 404 · 420 · 436 · 452 | 162–176 · 171–184 · 176–192 · 184–200 | Talon E+ 1 (2999); Talon E+ 2 (2599) |
| Talon [4f26dc93] | mtb | S (29") · M (29") · L (29") · XL (29") | 597 · 606 · 625 · 638 | 415 · 435 · 455 · 475 | — · — · — · — | Talon 0 (1099); Talon 1 (949); Talon 2 (799) |

<details><summary>Productos en alcance sin datos</summary>

- https://www.giant-bicycles.com/es/trance-advanced-eplus-0-2027 — sin tabla de geometría en la página
- https://www.giant-bicycles.com/es/trance-advanced-eplus-1-2027 — sin tabla de geometría en la página
- https://www.giant-bicycles.com/es/trance-advanced-eplus-2-2027 — sin tabla de geometría en la página

</details>

Descartados: fuera de alcance (URL/tipo): 4

## Merida — con avisos

Diff con bikes.csv: **+285** tallas nuevas, **−0** que desaparecen, **~0** con cambios. Productos candidatos: 84. Métodos: html. Descargas: {'httpx': 0, 'browser': 0, 'cache': 96, 'challenges': 0}.

| Familia | Cat. | Tallas | Stack | Reach | Altura (cm) | Modelos (precio €) |
|---|---|---|---|---|---|---|
| BIG.NINE 3000 [20b6c892] | mtb | S · M · L · XL · XXL | 606 · 606 · 615 · 624 · 634 | 432 · 452 · 472 · 492 · 512 | — · — · — · — · — | BIG.NINE 3000 (s/p) |
| BIG.NINE 7000 [9af3726f] | mtb | S · M · L · XL | 606 · 606 · 615 · 624 | 432 · 452 · 472 · 492 | — · — · — · — | BIG.NINE 7000 (s/p) |
| BIG.NINE TR 700 [a3e76f7c] | mtb | S · M · L | 614 · 614 · 624 | 420 · 440 · 460 | — · — · — | BIG.NINE TR 700 (s/p) |
| BIG.NINE [4b3dc6d7] | mtb | S · M · L | 606 · 606 · 615 | 432 · 452 · 472 | — · — · — | BIG.NINE 10k (s/p); BIG.NINE XT (s/p) |
| BIG.NINE [abbfae32] | mtb | S · M · L · XL · XXL | 619 · 624 · 633 · 643 · 652 | 390 · 410 · 430 · 450 · 470 | — · — · — · — · — | BIG.NINE 20 (s/p); BIG.NINE 200 (s/p); BIG.NINE 40 (s/p); BIG.NINE 400 (s/p) |
| BIG.SEVEN 20 [61112dec] | mtb | XXS · XS · S | 582 · 592 · 601 | 350 · 370 · 390 | — · — · — | BIG.SEVEN 20 (s/p) |
| LITHOS 6000 [f91f517c] | emtb | 29/27.5" | 646 | 460 | — | LITHOS 6000 (s/p) |
| LITHOS [b69dda59] | emtb | Long | 655 | 485 | — | LITHOS 10K (s/p); LITHOS 8000 (s/p) |
| MISSION [b424d2bd] | gravel | XXS · XS · S · M · L · XL | 529 · 542 · 555 · 569 · 584 · 610 | 370 · 377 · 384 · 391 · 398 · 405 | — · — · — · — · — · — | MISSION 4000 (s/p); MISSION 7000 (s/p) |
| MISSION [e74e1285] | gravel | XXS · XS · S · M · L | 529 · 542 · 555 · 569 · 584 | 370 · 377 · 384 · 391 · 398 | — · — · — · — · — | MISSION 10K (s/p); MISSION 6000 (s/p); MISSION 9000 (s/p) |
| NINETY-SIX 400 [d1629ccf] | mtb | Mid | 605 | 475 | — | NINETY-SIX 400 (s/p) |
| NINETY-SIX 6000 [3c360eaf] | mtb | M · L | 595 · 605 | 440 · 460 | — · — | NINETY-SIX 6000 (s/p) |
| NINETY-SIX [33ba681d] | mtb | S · M · L · XL | 595 · 595 · 605 · 614 | 420 · 440 · 460 · 480 | — · — · — · — | NINETY-SIX 9000 (s/p); NINETY-SIX XT (s/p) |
| ONE-SIXTY 700 [1b2c5f0b] | mtb | 29/27.5" · 29" | 615 · 625 | 415 · 498 | — · — | ONE-SIXTY 700 (s/p) |
| REACTO ONE [6ac230eb] | carretera | XXS · XS · S · M · L | 517 · 529 · 542 · 557 · 571 | 377 · 384 · 390 · 395 · 400 | — · — · — · — · — | REACTO ONE (s/p) |
| REACTO [0dcbf074] | carretera | 3XS · XXS · XS · S · M · L · XL | 512 · 517 · 529 · 542 · 557 · 571 · 593 | 373 · 377 · 384 · 390 · 395 · 400 · 409 | — · — · — · — · — · — · — | REACTO 4000 (s/p); REACTO 5000 (s/p); REACTO 6000 (s/p); REACTO 8000 (s/p); REACTO PRO (s/p) |
| REACTO [f02ad8c1] | carretera | XXS · XS · S · M · L · XL | 517 · 529 · 542 · 557 · 571 · 593 | 377 · 384 · 390 · 395 · 400 · 409 | — · — · — · — · — · — | REACTO 10K (s/p); REACTO 7000 (s/p); REACTO 9000 (s/p); REACTO TEAM (s/p) |
| SCULTURA 6000 [bf50650a] | carretera | XXS · XS · S · M · L | 517 · 529 · 542 · 557 · 571 | 377 · 383 · 390 · 395 · 400 | — · — · — · — · — | SCULTURA 6000 (s/p) |
| SCULTURA ENDURANCE 8000 [02d03947] | carretera | XS · S · M | 552 · 565 · 584 | 366 · 376 · 380 | — · — · — | SCULTURA ENDURANCE 8000 (s/p) |
| SCULTURA ENDURANCE GR 200 [2a30ad97] | carretera | XS · S · M · L | 552 · 565 · 584 · 603 | 366 · 376 · 380 · 389 | — · — · — · — | SCULTURA ENDURANCE GR 200 (s/p) |
| SCULTURA ENDURANCE [5c058db3] | carretera | XXS · XS · S · M · L · XL | 539 · 552 · 565 · 584 · 603 · 629 | 360 · 366 · 376 · 380 · 389 · 397 | — · — · — · — · — · — | SCULTURA ENDURANCE 4000 (s/p); SCULTURA ENDURANCE 5000 (s/p); SCULTURA ENDURANCE 6000 (s/p) |
| SCULTURA ENDURANCE [d35812c2] | carretera | 4XS · 3XS · XXS · XS · S · M · L · XL | 528 · 532 · 539 · 552 · 565 · 584 · 603 · 629 | 360 · 360 · 360 · 366 · 376 · 380 · 389 · 397 | — · — · — · — · — · — · — · — | SCULTURA ENDURANCE 400 (s/p); SCULTURA ENDURANCE GR 300 (s/p) |
| SCULTURA [c61c4f34] | carretera | 3XS · XXS · XS · S · M · L · XL | 512 · 517 · 529 · 542 · 557 · 571 · 593 | 373 · 377 · 383 · 390 · 395 · 400 · 409 | — · — · — · — · — · — · — | SCULTURA 4000 (s/p); SCULTURA 5000 (s/p); SCULTURA 8000 (s/p); SCULTURA 9000 (s/p) |
| SCULTURA [ca18db0c] | carretera | XS · S · M · L | 529 · 542 · 557 · 571 | 383 · 390 · 395 · 400 | — · — · — · — | SCULTURA 10K (s/p); SCULTURA TEAM (s/p) |
| SILEX 400 [359cb0d1] | gravel | XXS · XS · S · M · L | 549 · 570 · 588 · 607 · 626 | 378 · 392 · 402 · 412 · 426 | — · — · — · — · — | SILEX 400 (s/p) |
| SILEX 5000 [73f92ca3] | gravel | XS · S · M · L | 570 · 588 · 607 · 626 | 392 · 402 · 412 · 426 | — · — · — · — | SILEX 5000 (s/p) |
| SILEX [4cb71463] | gravel | XXS · XS · S · M · L | 549 · 570 · 588 · 607 · 626 | 378 · 392 · 402 · 412 · 426 | — · — · — · — · — | SILEX 4000 (s/p); SILEX 7000 (s/p) |
| eBIG.NINE 400 [e8ed7138] | emtb | S · M · L · XL | 636 · 640 · 650 · 659 | 411 · 427 · 445 · 462 | — · — · — · — | eBIG.NINE 400 (s/p) |
| eONE-EIGHTY [5d359000] | emtb | 29/27.5" | 652 | 415 | — | eONE-EIGHTY 500 (s/p); eONE-EIGHTY 700 (s/p); eONE-EIGHTY 900 (s/p) |
| eONE-FORTY 475 [81bbadd1] | emtb | 400 · 410 · 425 · 445 · 465 | 616 · 620 · 624 · 628 · 633 | 431 · 451 · 471 · 491 · 511 | — · — · — · — · — | eONE-FORTY 475 (s/p) |
| eONE-FORTY 675 [7ea170ac] | emtb | 400 · 410 · 425 · 445 | 616 · 620 · 624 · 628 | 431 · 451 · 471 · 491 | — · — · — · — | eONE-FORTY 675 (s/p) |
| eONE-SIXTY 10K [dba1ae27] | emtb | 29/27.5" | 624 | 419 | — | eONE-SIXTY 10K (s/p) |
| eONE-SIXTY 7000 [6deb8901] | emtb | 29/27.5" | 633 | 459 | — | eONE-SIXTY 7000 (s/p) |
| eONE-SIXTY 8000 [bf55c551] | emtb | 29/27.5" | 628 | 439 | — | eONE-SIXTY 8000 (s/p) |
| eONE-SIXTY SL [83172fcf] | emtb | 400 · 410 · 425 · 445 · 465 | 611 · 616 · 620 · 625 · 629 | 420 · 443 · 466 · 489 · 512 | — · — · — · — · — | eONE-SIXTY SL 10K (s/p); eONE-SIXTY SL 6000 (s/p); eONE-SIXTY SL 8000 (s/p) |
| eONE-SIXTY [3e3be80b] | emtb | 29/27.5" | 624 | 419 | — | eONE-SIXTY 675 (s/p); eONE-SIXTY 875 (s/p) |

<details><summary>Avisos</summary>

- LITHOS 6000: varias posiciones de geometría por talla: se usa la primera publicada
- eONE-SIXTY 10K: varias posiciones de geometría por talla: se usa la primera publicada
- eONE-SIXTY 8000: varias posiciones de geometría por talla: se usa la primera publicada
- eONE-SIXTY 7000: varias posiciones de geometría por talla: se usa la primera publicada
- eONE-SIXTY 875: varias posiciones de geometría por talla: se usa la primera publicada
- eONE-SIXTY 675: varias posiciones de geometría por talla: se usa la primera publicada
- eONE-EIGHTY 900: varias posiciones de geometría por talla: se usa la primera publicada
- eONE-EIGHTY 700: varias posiciones de geometría por talla: se usa la primera publicada
- eONE-EIGHTY 500: varias posiciones de geometría por talla: se usa la primera publicada
- ONE-SIXTY 700: varias posiciones de geometría por talla: se usa la primera publicada

</details>

Descartados: fuera de alcance (URL/tipo): 2, año de modelo anterior: 17

## Trek — con avisos

**Nota:** Stack/Reach = 'Altura del cuadro'/'Alcance del cuadro' (geometryFrameStack/Reach de la API de Trek), publicados en cm.

Diff con bikes.csv: **+643** tallas nuevas, **−0** que desaparecen, **~0** con cambios. Productos candidatos: 221. Métodos: html. Descargas: {'httpx': 0, 'browser': 0, 'cache': 198, 'challenges': 0}.

| Familia | Cat. | Tallas | Stack | Reach | Altura (cm) | Modelos (precio €) |
|---|---|---|---|---|---|---|
| Check-OUT SL [94f13e8b] | gravel | S · M · ML · L · XL | 580 · 617 · 634 · 652 · 673 | 395 · 407 · 417 · 427 · 435 | 157–165 · 165–178 · 178–188 · 188–193 · 193–203 | Check-OUT SL 5 (4999); Check-OUT SL 7 AXS (6999) |
| Checkmate SLR [477d93fb] | gravel | XS · S · M · ML · L · XL | 525 · 540 · 560 · 584 · 608 · 633 | 380 · 385 · 392 · 399 · 404 · 409 | 142–157 · 157–165 · 165–178 · 178–188 · 188–193 · 193–203 | Checkmate SLR 7 AXS (6999); Checkmate SLR 9 AXS (9499) |
| Checkpoint+ SL 7 AXS [202b6b6a] | gravel | S · M · ML · L · XL | 562 · 585 · 607 · 626 · 647 | 376 · 382 · 387 · 392 · 398 | — · — · — · — · — | Checkpoint+ SL 7 AXS (7499) |
| Checkpoint+ SL [afeccc11] | gravel | XS · S · M · ML · L · XL | 535 · 556 · 579 · 601 · 620 · 640 | 380 · 386 · 391 · 397 · 402 · 408 | 142–157 · 157–165 · 165–178 · 178–188 · 188–193 · 193–203 | Checkpoint+ SL 5 (4999); Checkpoint+ SL 6 AXS (5999) |
| Cuadros sueltos Marlin Gen 3 [cc683461] | mtb | XXS · XS · S · M · ML · L · XL · XXL | 544 · 563 · 572 · 609 · 614 · 618 · 637 · 651 | 365 · 390 · 415 · 440 · 455 · 470 · 495 · 520 | 135–145 · 145–155 · 155–165 · 165–178 · 173–180 · 178–188 · 188–196 · 196–203 | Cuadros sueltos Marlin Gen 3 (499) |
| Domane AL 2 Gen 3 [6adec507] | carretera | 54cm · 56cm | 575 · 591 | 374 · 377 | — · — | Domane AL 2 Gen 3 (899) |
| Domane AL 5 Gen 3 [e679b71c] | carretera | 44cm · 52cm · 54cm · 56cm · 58cm | 510 · 561 · 575 · 591 · 611 | 360 · 371 · 374 · 377 · 380 | — · — · — · — · — | Domane AL 5 Gen 3 (2049) |
| Domane AL [e56619cc] | carretera | 44cm · 49cm · 52cm · 54cm · 56cm · 58cm · 61cm | 510 · 540 · 561 · 575 · 591 · 611 · 646 | 360 · 368 · 371 · 374 · 377 · 380 · 385 | — · — · — · — · — · — · — | Domane AL 2 Gen 4 (999); Domane AL 4 Gen 4 (1499); Domane AL 5 Gen 4 (1999) |
| Domane SL 5 Gen 4 [d400a59b] | carretera | 47cm · 50cm · 52cm · 54cm · 56cm · 58cm · 60cm · 62cm | 527 · 546 · 561 · 575 · 591 · 611 · 632 · 656 | 364 · 368 · 371 · 374 · 377 · 380 · 383 · 386 | — · — · — · — · — · — · — · — | Domane SL 5 Gen 4 (2899) |
| Domane SL 6 Gen 4 [3a3f13ca] | carretera | 54cm · 56cm · 58cm | 575 · 591 · 611 | 374 · 377 · 380 | — · — · — | Domane SL 6 Gen 4 (3999) |
| Domane SL 6 [982c0ecf] | carretera | 54cm | 575 | 374 | — | Domane SL 6 (3599) |
| Domane SL 7 Gen 4 [1e4439ec] | carretera | 44cm · 47cm · 50cm · 52cm · 54cm · 56cm · 58cm | 510 · 527 · 546 · 561 · 575 · 591 · 611 | 360 · 364 · 368 · 371 · 374 · 377 · 380 | — · — · — · — · — · — · — | Domane SL 7 Gen 4 (5999) |
| Domane [38944843] | carretera | XS · S · M · ML · L · XL | 524 · 555 · 575 · 596 · 618 · 648 | 368 · 371 · 374 · 377 · 380 · 384 | 142–157 · 157–163 · 163–173 · 173–178 · 178–188 · 188–198 | Domane SL 5 Gen 5 (2499); Domane SL 6 AXS Gen 5 (3999); Domane SL 7 AXS 1x Gen 5 (4999); Domane SLR 7 AXS Gen 5 (7499); Domane SLR 7 Gen 5 (6999); Domane SLR 9 AXS 1x Gen 5 (10499); Domane SLR 9 AXS Gen 5 (10499); Domane SLR 9 AXS n.º 76 Gen 5 (12999); Domane SLR 9 Gen 5 (9999) |
| Fuel EX 7 Gen 5 [66f06e8b] | mtb | XS | 559 | 400 | — | Fuel EX 7 Gen 5 (2949) |
| Fuel EX 7 [8e4d2f84] | mtb | 18.5" | 609 | 460 | — | Fuel EX 7 (2699) |
| Fuel EX 8 Gen 2 [8df1e597] | emtb | S · M · L · XL | 624 · 624 · 638 · 651 | 431 · 460 · 485 · 510 | 155–165 · 165–178 · 178–188 · 188–196 | Fuel EX 8 Gen 2 (5499) |
| Fuel EX 8 Gen 5 [5b60d4ab] | mtb | L | 609 | 475 | — | Fuel EX 8 Gen 5 (3499) |
| Fuel EX 9.7 [1dcea974] | mtb | S · XL | 605 · 623 | 420 · 500 | — · — | Fuel EX 9.7 (4199) |
| Fuel EX 9.8 GX AXS Gen 5 [80d4e466] | mtb | S · M | 568 · 605 | 420 · 445 | — · — | Fuel EX 9.8 GX AXS Gen 5 (7299) |
| Fuel EX 9.9 X0 AXS T-Type Gen 6 [d9507e43] | mtb | S | 572 | 433 | — | Fuel EX 9.9 X0 AXS T-Type Gen 6 (9499) |
| Fuel EX [db85755a] | mtb | S · M · L · XL | 610 · 624 · 638 · 651 | 431 · 460 · 485 · 510 | 155–165 · 165–178 · 178–188 · 188–196 | Fuel EX 5 Gen 7 (2499); Fuel EX 8 Gen 7 (3499); Fuel EX 9 Eagle 90 Gen 7 (5499); Fuel EX 9 X0 AXS Gen 7 (6499); Fuel EX 9 XT Di2 Gen 7 (5999); Fuel EX 9 XT Gen 7 (5499) |
| Fuel EX [f9fd2baa] | mtb | S · M · L · XL · XXL | 610 · 624 · 638 · 651 · 665 | 431 · 460 · 485 · 510 · 530 | 155–165 · 165–178 · 178–188 · 188–196 · 196–203 | Fuel EX 9.8 Eagle 90 Gen 7 (6499); Fuel EX 9.8 XT Di2 Gen 7 (6999); Fuel EX 9.8 XT Gen 7 (6499); Fuel EX 9.9 X0 AXS Gen 7 (8499) |
| Fuel EXe 9.7 [93f2f079] | emtb | M | 625 | 459 | — | Fuel EXe 9.7 (5499) |
| Fuel LX 9 [1718a93c] | mtb | S · M · L · XL | 619 · 633 · 647 · 661 | 418 · 448 · 473 · 498 | 155–165 · 165–178 · 178–188 · 188–196 | Fuel LX 9 Eagle 90 Gen 7 (5699); Fuel LX 9 X0 AXS Gen 7 (6699); Fuel LX 9 XT Di2 Gen 7 (6199); Fuel LX 9 XT Gen 7 (5699) |
| Fuel LX [db86e5ff] | mtb | S · M · L · XL · XXL | 619 · 633 · 647 · 661 · 674 | 418 · 448 · 473 · 498 · 518 | 155–165 · 165–178 · 178–188 · 188–196 · 196–203 | Fuel LX 9.8 Eagle 90 Gen 7 (6699); Fuel LX 9.8 XT Di2 Gen 7 (7199); Fuel LX 9.8 XT Gen 7 (6699); Fuel LX 9.9 X0 AXS Gen 7 (8699) |
| Fuel MX 9 [e9eb5bc8] | mtb | S · M · L · XL | 613 · 627 · 641 · 654 | 426 · 456 · 482 · 507 | 155–165 · 165–178 · 178–188 · 188–196 | Fuel MX 9 Eagle 90 Gen 7 (5499); Fuel MX 9 X0 AXS Gen 7 (6499); Fuel MX 9 XT Di2 Gen 7 (5999); Fuel MX 9 XT Gen 7 (5499) |
| Fuel MX [7f1e1c59] | mtb | S · M · L · XL · XXL | 613 · 627 · 641 · 654 · 668 | 426 · 456 · 482 · 507 · 527 | 155–165 · 165–178 · 178–188 · 188–196 · 196–203 | Fuel MX 9.8 Eagle 90 Gen 7 (6499); Fuel MX 9.8 XT Di2 Gen 7 (6999); Fuel MX 9.8 XT Gen 7 (6499); Fuel MX 9.9 X0 AXS Gen 7 (8499) |
| Fuel+ EX 8 Gen 2 [667f4e19] | emtb | M · L · XL | 624 · 638 · 651 | 460 · 485 · 510 | 165–177 · 177–188 · 188–195 | Fuel+ EX 8 Gen 2 (5499) |
| Fuel+ EX [0584e61b] | emtb | S · M · L · XL · XXL | 624 · 624 · 638 · 651 · 665 | 431 · 460 · 485 · 510 · 530 | 155–165 · 165–178 · 178–188 · 188–196 · 196–203 | Fuel+ EX 9,8 XT Di2 Gen 2 (8999); Fuel+ EX 9,9 X0 AXS Gen 2 (11499); Fuel+ EX 9.7 Gen 2 (5999); Fuel+ EX 9.8 Eagle 90 Gen 2 (8499); Fuel+ EX 9.8 XT Gen 2 (8499) |
| Fuel+ LX [1edb9afd] | emtb | S · M · L · XL · XXL | 633 · 633 · 647 · 661 · 674 | 418 · 448 · 473 · 498 · 518 | 155–165 · 165–178 · 178–188 · 188–196 · 196–203 | Fuel+ LX 9,9 X0 AXS Gen 2 (11699); Fuel+ LX 9.8 Eagle 90 Gen 2 (8699); Fuel+ LX 9.8 XT Di2 Gen 2 (9199); Fuel+ LX 9.8 XT Gen 2 (8699) |
| Fuel+ MX 9.8 XT Di2 Gen 2 [7036c475] | emtb | 17.5" | 627 | 456 | — | Fuel+ MX 9.8 XT Di2 Gen 2 (8999) |
| Fuel+ MX [f0cca6b8] | emtb | S · M · L · XL · XXL | 627 · 627 · 641 · 654 · 668 | 426 · 456 · 482 · 507 · 527 | 155–165 · 165–178 · 178–188 · 188–196 · 196–203 | Fuel+ MX 9,8 Eagle 90 Gen 2 (8499); Fuel+ MX 9,8 XT Di2 Gen 2 (8999); Fuel+ MX 9,8 XT Gen 2 (8499); Fuel+ MX 9.9 X0 AXS Gen 2 (11499) |
| Madone [2fc29978] | carretera | XS · S · M · ML · L · XL | 507 · 530 · 546 · 562 · 582 · 610 | 370 · 378 · 384 · 389 · 394 · 402 | 142–157 · 157–163 · 163–173 · 173–178 · 178–188 · 188–198 | Madone SL 5 Gen 8 (2799); Madone SL 5 Pro Gen 8 (3299); Madone SL 6 AXS Gen 8 (4299); Madone SL 6 Gen 8 (4299); Madone SL 7 Gen 8 (5599); Madone SL 7 Gen 8 - La First 50 Replica (5599); Madone SLR 7 AXS Gen 8 (8499); Madone SLR 7 Gen 8 (7999); Madone SLR 9 AXS 1x Gen 8 (11499); Madone SLR 9 AXS Gen 8 (11999); Madone SLR 9 AXS Gen 8 - La First 50 ICON (14399); Madone SLR 9 AXS Gen 8 - No. 76 ICON (14399); Madone SLR 9 Gen 8 (11499) |
| Marlin 5 Gen 2 [917afce1] | mtb | 15.5" | 574 | 385 | — | Marlin 5 Gen 2 (669) |
| Marlin [b717dc36] | mtb | XS · S · M · ML · L · XL · XXL | 563 · 572 · 609 · 614 · 618 · 637 · 651 | 390 · 415 · 440 · 455 · 470 · 495 · 520 | 145–155 · 155–165 · 165–178 · 173–180 · 178–188 · 188–196 · 196–203 | Marlin 4 Gen 3 (579); Marlin 5 Gen 3 (679); Marlin 6 Gen 3 (949); Marlin 7 Gen 3 (1149) |
| Marlin+ 8 [61024579] | emtb | S · M · L · XL | 590 · 626 · 635 · 653 | 415 · 440 · 470 · 495 | 155–165 · 165–177 · 177–188 · 188–195 | Marlin+ 8 (2799) |
| Powerfly FS+ 8 Gen 4 [6d8d3bc5] | emtb | S · M · L · XL | 597 · 629 · 647 · 666 | 425 · 450 · 475 · 500 | 155–165 · 165–178 · 178–188 · 188–196 | Powerfly FS+ 4 800 Gen 4 (4199); Powerfly FS+ 5 Gen 4 (4499); Powerfly FS+ 6 Gen 4 (4999); Powerfly FS+ 8 Gen 4 (5999); Powerfly+ FS 4 Equipped 800 Gen 4 (4499); Powerfly+ FS 4 Equipped Gen 4 (4299); Powerfly+ FS 4 Gen 4 (3999); Powerfly+ FS 6 Gen 4 (4999); Powerfly+ FS 8 Gen 4 (6499) |
| Powerfly+ 4 Equipped 800 Wh Gen 5 [43ea52e0] | emtb | S | 599 | 410 | — | Powerfly+ 4 Equipped 800 Wh Gen 5 (3599) |
| Powerfly+ [f58c0de7] | emtb | S · M · L · XL | 599 · 641 · 655 · 673 | 410 · 440 · 465 · 490 | 155–165 · 165–178 · 178–188 · 188–196 | Powerfly+ 4 800 Wh Gen 5 (3299); Powerfly+ 4 Equipped 800 Gen 5 (3599); Powerfly+ 4 Equipped Gen 5 (3299); Powerfly+ 4 Gen 5 (2999); Powerfly+ 6 Gen 5 (3799); Powerfly+ 8 Gen 5 (4499) |
| Procaliber [4f7a0c1f] | mtb | S · M · ML · L · XL | 614 · 614 · 614 · 614 · 642 | 405 · 430 · 445 · 460 · 500 | 155–165 · 165–178 · 173–180 · 178–188 · 188–196 | Procaliber 6 (1299); Procaliber 8 (1499); Procaliber 9.5 Gen 3 (1999); Procaliber 9.6 Gen 3 (2499); Procaliber 9.7 AXS Gen 3 (4499); Procaliber 9.7 Gen 3 (4499) |
| Rail+ 9.8 GX AXS T-Type Gen 5 [15de6196] | emtb | M · L · XL | 627 · 645 · 668 | 455 · 495 · 520 | 165–177 · 177–188 · 188–195 | Rail+ 9.8 GX AXS T-Type Gen 5 (7499) |
| Rail+ [57d93488] | emtb | S · M · L · XL | 594 · 627 · 645 · 668 | 435 · 455 · 495 · 520 | 155–165 · 165–178 · 178–188 · 188–196 | Rail+ 9.7 Gen 5 (5999); Rail+ 9.8 Gen 5 (7499) |
| Rail+ [9b727835] | emtb | S · M · L · XL | 594 · 627 · 645 · 668 | 435 · 455 · 495 · 520 | 155–165 · 165–178 · 178–188 · 188–196 | Rail+ 5 Gen 5 (4499); Rail+ 8 Gen 5 (5499) |
| Remedy 8 XT [5d60eb2e] | mtb | XL | 610 | 481 | — | Remedy 8 XT (3399) |
| Roscoe 7 [c3272f3f] | mtb | 23" | 644 | 457 | — | Roscoe 7 (1249) |
| Roscoe 8 [d1845b2a] | mtb | XL | 666 | 495 | — | Roscoe 8 (2449) |
| Session 9 X01 [7019f470] | mtb | 42.5 | 634 | 472 | — | Session 9 X01 (7099) |
| Slash 7 Gen 5 [01882483] | mtb | 18.5" | 622 | 474 | — | Slash 7 Gen 5 (2719.2) |
| Slash 9.8 XT Di2 Gen 6 [3bf377df] | mtb | 18.5 · 19.5 | 632 · 641 | 468 · 488 | — · — | Slash 9.8 XT Di2 Gen 6 (7999) |
| Slash 9.8 XT Gen 5 [4bac2bd3] | mtb | 18.5" | 622 | 474 | — | Slash 9.8 XT Gen 5 (6299) |
| Slash 9.9 X0 AXS T-Type Gen 6 [d668383d] | mtb | 18.5 · 19.5 · 21.5 | 632 · 641 · 659 | 468 · 488 · 513 | — · — · — | Slash 9.9 X0 AXS T-Type Gen 6 (7999) |
| Slash+ [61370306] | emtb | 21.5" | 658 | 519 | — | Slash+ 9.7 SLX/XT (6999); Slash+ 9.9 X0 AXS T-Type (10499) |
| Slash+ [70a9c4b0] | emtb | S · M · L · XL | 597 · 631 · 639 · 658 | 430 · 449 · 479 · 519 | 155–165 · 165–178 · 178–188 · 188–196 | Slash+ 9.7 (6999); Slash+ 9.9 (10499) |
| Supercaliber 9.8 GX Gen 1 [65d2a1df] | mtb | M · L | 594 · 594 | 425 · 455 | — · — | Supercaliber 9.8 GX Gen 1 (6699) |
| Supercaliber [fac2a6b6] | mtb | S · M · ML · L · XL | 590 · 590 · 590 · 599 · 622 | 410 · 435 · 450 · 465 · 500 | 155–165 · 165–178 · 173–180 · 178–188 · 188–196 | Supercaliber SL 9.6 Gen 2 (3999); Supercaliber SL 9.7 GX AXS Gen 2 (4999); Supercaliber SLR 9.8 X0 AXS T-Type Gen 2 (6499); Supercaliber SLR 9.8 X0 Flight Attendant Gen 2 (9999); Supercaliber SLR 9.8 XT Di2 Gen 2 (7999); Supercaliber SLR 9.9 XTR Di2 Gen 2 (9999); Supercaliber SLR 9.9 XX Flight Attendant Gen (13999) |
| Top Fuel 5 Gen 3 [38e1bb90] | mtb | M | 596 | 449 | — | Top Fuel 5 Gen 3 (2499) |
| Top Fuel 7 SX Gen 2 [316a8ccf] | mtb | M · ML · L | 590 · 590 · 599 | 445 · 461 · 475 | — · — · — | Top Fuel 7 SX Gen 2 (2699) |
| Top Fuel 8 Gen 4 [66384e13] | mtb | S · M · ML · L · XL | 570 · 603 · 607 · 612 · 630 | 417 · 447 · 462 · 477 · 507 | 155–165 · 165–178 · 173–180 · 178–188 · 188–196 | Top Fuel 8 Gen 4 (3599) |
| Top Fuel 9.8 XT Di2 Gen 4 [8c23c918] | mtb | S · M · ML · L · XL | 566 · 599 · 604 · 608 · 626 | 422 · 452 · 467 · 482 · 512 | 155–165 · 165–178 · 173–180 · 178–188 · 188–196 | Top Fuel 9.8 XT Di2 Gen 4 (6999) |
| Top Fuel 9.9 [6fe35e34] | mtb | S | 566 | 422 | — | Top Fuel 9.9 XTR Di2 Gen 4 (8499); Top Fuel 9.9 XX AXS Gen 4 (11499) |
| Émonda ALR 5 [176ff2dc] | carretera | 56cm · 62cm | 577 · 634 | 387 · 398 | — · — | Émonda ALR 5 (1899) |

<details><summary>Productos en alcance sin datos</summary>

- https://www.trekbikes.com/es/es_ES/bicicletas/bicicletas-de-monta%C3%B1a/bicicletas-de-monta%C3%B1a-de-trail/bicicletas-all-mountain/fuel/fuel-ex/fuel-ex-9-9-xtr-gen-6/p/36954/ — sin tabla de geometría en la página
- https://www.trekbikes.com/es/es_ES/bicicletas/bicicletas-de-monta%C3%B1a/bicicletas-de-monta%C3%B1a-de-trail/bicicletas-all-mountain/fuel/fuel-ex/fuel-ex-8-gx-axs-t-type-gen-6/p/41328/ — sin tabla de geometría en la página
- https://www.trekbikes.com/es/es_ES/bicicletas/bicicletas-de-monta%C3%B1a/bicicletas-de-monta%C3%B1a-de-trail/slash/slash-9-gx-axs-t-type-gen-6/p/41669/ — sin tabla de geometría en la página
- https://www.trekbikes.com/es/es_ES/bicicletas/bicicletas-de-monta%C3%B1a/bicicletas-de-monta%C3%B1a-de-trail/slash/slash-8-gen-6/p/41668/ — sin tabla de geometría en la página
- https://www.trekbikes.com/es/es_ES/bicicletas/bicicletas-de-monta%C3%B1a/bicicletas-de-monta%C3%B1a-de-trail/bicicletas-all-mountain/fuel/fuel-ex/fuel-ex-5-gen-6/p/41346/ — sin tabla de geometría en la página

</details>

<details><summary>Avisos</summary>

- Madone SLR 9 AXS Gen 8 - No. 76 ICON: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Madone SLR 9 AXS Gen 8 - No. 76 ICON: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Domane SLR 9 AXS n.º 76 Gen 5: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Domane SLR 9 AXS n.º 76 Gen 5: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Madone SLR 9 AXS Gen 8 - La First 50 ICON: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Madone SLR 9 AXS Gen 8 - La First 50 ICON: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Domane SLR 9 AXS Gen 5: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Domane SLR 9 AXS Gen 5: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Domane SLR 9 AXS 1x Gen 5: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Domane SLR 9 AXS 1x Gen 5: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Domane SLR 9 Gen 5: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Domane SLR 9 Gen 5: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Domane SLR 7 AXS Gen 5: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Domane SLR 7 AXS Gen 5: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Domane SLR 7 Gen 5: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Domane SLR 7 Gen 5: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Madone SL 7 Gen 8 - La First 50 Replica: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Madone SL 7 Gen 8 - La First 50 Replica: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Domane SL 7 AXS 1x Gen 5: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Domane SL 7 AXS 1x Gen 5: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Domane SL 6 AXS Gen 5: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Domane SL 6 AXS Gen 5: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Madone SL 5 Pro Gen 8: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Madone SL 5 Pro Gen 8: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Domane SL 5 Gen 5: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Domane SL 5 Gen 5: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Domane AL 5 Gen 4: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Domane AL 5 Gen 4: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Domane AL 4 Gen 4: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Domane AL 4 Gen 4: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Domane AL 2 Gen 4: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Domane AL 2 Gen 4: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Madone SLR 9 AXS Gen 8: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Madone SLR 9 AXS Gen 8: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Madone SLR 9 Gen 8: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Madone SLR 9 Gen 8: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Madone SLR 9 AXS 1x Gen 8: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Madone SLR 9 AXS 1x Gen 8: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Checkmate SLR 9 AXS: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Checkmate SLR 9 AXS: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Madone SLR 7 AXS Gen 8: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Madone SLR 7 AXS Gen 8: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Madone SLR 7 Gen 8: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Madone SLR 7 Gen 8: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Checkpoint+ SL 7 AXS: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Checkpoint+ SL 7 AXS: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Check-OUT SL 7 AXS: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Check-OUT SL 7 AXS: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Checkmate SLR 7 AXS: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Checkmate SLR 7 AXS: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Checkpoint+ SL 6 AXS: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Checkpoint+ SL 6 AXS: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Domane SL 7 Gen 4: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Domane SL 7 Gen 4: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Madone SL 7 Gen 8: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Madone SL 7 Gen 8: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Checkpoint+ SL 5: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Checkpoint+ SL 5: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Check-OUT SL 5: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Check-OUT SL 5: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Madone SL 6 Gen 8: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Madone SL 6 Gen 8: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Madone SL 6 AXS Gen 8: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Madone SL 6 AXS Gen 8: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Domane SL 6 Gen 4: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Domane SL 6 Gen 4: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Domane SL 6: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Domane SL 6: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Domane SL 5 Gen 4: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Domane SL 5 Gen 4: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Madone SL 5 Gen 8: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Madone SL 5 Gen 8: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Émonda ALR 5: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Émonda ALR 5: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Domane AL 5 Gen 3: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Domane AL 5 Gen 3: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Domane AL 2 Gen 3: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Domane AL 2 Gen 3: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel EX 9.9 X0 AXS T-Type Gen 6: varias posiciones de geometría por talla: se usa la primera publicada
- Fuel EX 9.9 X0 AXS T-Type Gen 6: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel EX 9.9 X0 AXS T-Type Gen 6: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Top Fuel 9.9 XTR Di2 Gen 4: varias posiciones de geometría por talla: se usa la primera publicada
- Top Fuel 9.9 XTR Di2 Gen 4: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Top Fuel 9.9 XTR Di2 Gen 4: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel EX 9.8 GX AXS Gen 5: varias posiciones de geometría por talla: se usa la primera publicada
- Fuel EX 9.8 GX AXS Gen 5: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel EX 9.8 GX AXS Gen 5: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Top Fuel 9.8 XT Di2 Gen 4: varias posiciones de geometría por talla: se usa la primera publicada
- Top Fuel 9.8 XT Di2 Gen 4: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Top Fuel 9.8 XT Di2 Gen 4: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel+ LX 9,9 X0 AXS Gen 2: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel+ LX 9,9 X0 AXS Gen 2: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel+ EX 9,9 X0 AXS Gen 2: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel+ EX 9,9 X0 AXS Gen 2: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel+ MX 9.9 X0 AXS Gen 2: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel+ MX 9.9 X0 AXS Gen 2: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel+ LX 9.8 XT Di2 Gen 2: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel+ LX 9.8 XT Di2 Gen 2: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel+ EX 9,8 XT Di2 Gen 2: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel+ EX 9,8 XT Di2 Gen 2: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel+ MX 9,8 XT Di2 Gen 2: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel+ MX 9,8 XT Di2 Gen 2: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel+ LX 9.8 Eagle 90 Gen 2: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel+ LX 9.8 Eagle 90 Gen 2: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel LX 9.9 X0 AXS Gen 7: varias posiciones de geometría por talla: se usa la primera publicada
- Fuel LX 9.9 X0 AXS Gen 7: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel LX 9.9 X0 AXS Gen 7: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel+ LX 9.8 XT Gen 2: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel+ LX 9.8 XT Gen 2: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel+ MX 9,8 Eagle 90 Gen 2: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel+ MX 9,8 Eagle 90 Gen 2: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel EX 9.9 X0 AXS Gen 7: varias posiciones de geometría por talla: se usa la primera publicada
- Fuel EX 9.9 X0 AXS Gen 7: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel EX 9.9 X0 AXS Gen 7: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel+ EX 9.8 Eagle 90 Gen 2: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel+ EX 9.8 Eagle 90 Gen 2: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel+ MX 9,8 XT Gen 2: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel+ MX 9,8 XT Gen 2: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel+ EX 9.8 XT Gen 2: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel+ EX 9.8 XT Gen 2: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel MX 9.9 X0 AXS Gen 7: varias posiciones de geometría por talla: se usa la primera publicada
- Fuel MX 9.9 X0 AXS Gen 7: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel MX 9.9 X0 AXS Gen 7: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel EX 7 Gen 5: varias posiciones de geometría por talla: se usa la primera publicada
- Fuel EX 7 Gen 5: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel EX 7 Gen 5: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Rail+ 9.8 Gen 5: varias posiciones de geometría por talla: se usa la primera publicada
- Rail+ 9.8 Gen 5: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Rail+ 9.8 Gen 5: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel LX 9.8 XT Di2 Gen 7: varias posiciones de geometría por talla: se usa la primera publicada
- Fuel LX 9.8 XT Di2 Gen 7: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel LX 9.8 XT Di2 Gen 7: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel MX 9.8 XT Di2 Gen 7: varias posiciones de geometría por talla: se usa la primera publicada
- Fuel MX 9.8 XT Di2 Gen 7: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel MX 9.8 XT Di2 Gen 7: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel EX 9.8 XT Di2 Gen 7: varias posiciones de geometría por talla: se usa la primera publicada
- Fuel EX 9.8 XT Di2 Gen 7: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel EX 9.8 XT Di2 Gen 7: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel LX 9.8 Eagle 90 Gen 7: varias posiciones de geometría por talla: se usa la primera publicada
- Fuel LX 9.8 Eagle 90 Gen 7: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel LX 9.8 Eagle 90 Gen 7: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel LX 9 X0 AXS Gen 7: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel LX 9 X0 AXS Gen 7: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel LX 9.8 XT Gen 7: varias posiciones de geometría por talla: se usa la primera publicada
- Fuel LX 9.8 XT Gen 7: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel LX 9.8 XT Gen 7: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel MX 9.8 Eagle 90 Gen 7: varias posiciones de geometría por talla: se usa la primera publicada
- Fuel MX 9.8 Eagle 90 Gen 7: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel MX 9.8 Eagle 90 Gen 7: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel EX 9.8 Eagle 90 Gen 7: varias posiciones de geometría por talla: se usa la primera publicada
- Fuel EX 9.8 Eagle 90 Gen 7: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel EX 9.8 Eagle 90 Gen 7: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel EX 9.8 XT Gen 7: varias posiciones de geometría por talla: se usa la primera publicada
- Fuel EX 9.8 XT Gen 7: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel EX 9.8 XT Gen 7: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel EX 9 X0 AXS Gen 7: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel EX 9 X0 AXS Gen 7: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel MX 9.8 XT Gen 7: varias posiciones de geometría por talla: se usa la primera publicada
- Fuel MX 9.8 XT Gen 7: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel MX 9.8 XT Gen 7: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel MX 9 X0 AXS Gen 7: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel MX 9 X0 AXS Gen 7: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel LX 9 XT Di2 Gen 7: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel LX 9 XT Di2 Gen 7: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Powerfly FS+ 8 Gen 4: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Powerfly FS+ 8 Gen 4: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Rail+ 9.7 Gen 5: varias posiciones de geometría por talla: se usa la primera publicada
- Rail+ 9.7 Gen 5: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Rail+ 9.7 Gen 5: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel EX 9 XT Di2 Gen 7: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel EX 9 XT Di2 Gen 7: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel+ EX 9.7 Gen 2: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel+ EX 9.7 Gen 2: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel MX 9 XT Di2 Gen 7: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel MX 9 XT Di2 Gen 7: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel LX 9 XT Gen 7: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel LX 9 XT Gen 7: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel LX 9 Eagle 90 Gen 7: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel LX 9 Eagle 90 Gen 7: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel MX 9 XT Gen 7: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel MX 9 XT Gen 7: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel MX 9 Eagle 90 Gen 7: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel MX 9 Eagle 90 Gen 7: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel EX 8 Gen 2: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel EX 8 Gen 2: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel EX 9 Eagle 90 Gen 7: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel EX 9 Eagle 90 Gen 7: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Fuel EX 9 XT Gen 7: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Fuel EX 9 XT Gen 7: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Powerfly FS+ 6 Gen 4: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Powerfly FS+ 6 Gen 4: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Powerfly FS+ 5 Gen 4: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Powerfly FS+ 5 Gen 4: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Powerfly+ FS 4 Equipped 800 Gen 4: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Powerfly+ FS 4 Equipped 800 Gen 4: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Powerfly+ 8 Gen 5: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Powerfly+ 8 Gen 5: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Procaliber 9.7 Gen 3: 'Stack (cm)' publicado en cm: convertido a mm (×10)
- Procaliber 9.7 Gen 3: 'Reach (cm)' publicado en cm: convertido a mm (×10)
- Powerfly FS+ 4 800 Gen 4: 'Stack (cm)' publicado en cm: convertido a mm (×10)

</details>

Descartados: fuera de alcance (URL/tipo): 39, año de modelo anterior: 28, duplicado (mismo modelo): 1

## Specialized — con avisos

**Nota:** Altura de la guía oficial /es/es/size-guide (pestaña Bikes) por familia; sin altura si la guía no cubre todas las tallas de la geometría. Rechazos: stack/reach publicados no crecientes (Chisel, Epic). El botón 'Guía de tallas' de la ficha es una calculadora (no se usa).

Diff con bikes.csv: **+556** tallas nuevas, **−0** que desaparecen, **~0** con cambios. Productos candidatos: 143. Métodos: html. Descargas: {'httpx': 0, 'browser': 0, 'cache': 159, 'challenges': 0}.

| Familia | Cat. | Tallas | Stack | Reach | Altura (cm) | Modelos (precio €) |
|---|---|---|---|---|---|---|
| Aethos 2 Pro - SRAM Force AXS [b910e174] | carretera | 49 · 52 · 54 · 56 · 58 · 61 | 522 · 538 · 559 · 580 · 606 · 627 | 373 · 377 · 384 · 391 · 398 · 404 | 155–163 · 163–170 · 170–175 · 175–180 · 180–188 · 188–196 | Aethos 2 Expert - Shimano Ultegra Di2 (6299); Aethos 2 Expert: SRAM Force AXS (6299); Aethos 2 Pro - SRAM Force AXS (8699); Aethos 2 Pro - Shimano Ultegra Di2 (8499); S-Works Aethos 2 - SRAM RED AXS (13999); S-Works Aethos 2 - Shimano Dura-Ace Di2 (13499) |
| Allez Sport - Shimano Tiagra [32b0aeab] | carretera | 44 · 49 · 52 · 54 · 56 · 58 · 61 | 519 · 536 · 552 · 569 · 590 · 610 · 643 | 356 · 359 · 364 · 370 · 378 · 386 · 392 | — · — · — · — · — · — · — | Allez Sport - Shimano Tiagra (1749) |
| Allez Sprint Comp [fe468fa9] | carretera | 49 · 52 · 54 · 56 · 58 · 61 | 508 · 520 · 537 · 558 · 584 · 605 | 378 · 383 · 387 · 398 · 405 · 411 | 155–163 · 163–170 · 170–175 · 175–183 · 180–188 · 188–196 | Allez Sprint Comp (2499) |
| Allez [8c126cca] | carretera | 44 · 49 · 52 · 54 · 56 · 58 · 61 | 519 · 536 · 552 · 569 · 590 · 610 · 643 | 356 · 359 · 364 · 370 · 378 · 386 · 392 | — · — · — · — · — · — · — | Allez (1499); Allez Comp (1999) |
| Chisel Hardtail [671a11a9] | mtb | XS · S · M · L · XL | 591 · 605 · 605 · 619 · 633 | 385 · 405 · 430 · 455 · 480 | 148–155 · 158–165 · 165–178 · 178–185 · 185–193 | Chisel Hardtail (1349+); Chisel Hardtail Comp (1699) |
| Crux 5 Comp: SRAM Rival XPLR [c9b32aea] | gravel | 49 · 52 · 54 · 56 · 58 · 61 | 530 · 547 · 560 · 578 · 598 · 621 | 375 · 382 · 388 · 400 · 412 · 425 | 155–158 · 163–168 · 168–175 · 175–183 · 183–191 · 191–198 | Crux 5 Comp: SRAM Rival XPLR (4499); Crux 5 Expert: SRAM Force XPLR (6999); Crux 5 S-Level: SRAM RED XPLR (10499); Crux 5 Sport: Shimano GRX 800 (3999); S-Works Crux 5 LTD: Built for Legends (14999); S-Works Crux 5: SRAM RED XPLR (13999) |
| Crux DSW [ad25210a] | gravel | 49 · 52 · 54 · 56 · 58 · 61 | 530 · 547 · 560 · 578 · 598 · 621 | 375 · 382 · 388 · 397 · 405 · 415 | 155–158 · 163–168 · 168–175 · 175–183 · 183–191 · 191–198 | Crux Comp (3999); Crux DSW (2699); Crux Expert - SRAM Rival XPLR AXS (5999); S-Works Crux (12999) |
| Diverge 4 Pro: SRAM Force XPLR [87a84ecd] | gravel | 49 · 52 · 54 · 56 · 58 · 61 | 563 · 578 · 592 · 610 · 634 · 659 | 365 · 374 · 387 · 400 · 412 · 425 | — · — · — · — · — · — | Diverge 4 Comp Alloy - SRAM Apex (2799); Diverge 4 Comp Carbon - SRAM Apex AXS/S1000 (4499); Diverge 4 Expert - SRAM Rival XPLR (6299); Diverge 4 Expert - Shimano GRX Di2 (6499); Diverge 4 Expert: SRAM Rival XPLR (6299); Diverge 4 Pro - SRAM Force XPLR (7999); Diverge 4 Pro LTD - Shimano XTR/GRX Di2 (9999); Diverge 4 Pro: SRAM Force XPLR (7999); Diverge 4 Sport Alloy - Shimano CUES (2299); Diverge 4 Sport Carbon - Shimano GRX 600 (3499); S-Works Diverge 4: SRAM RED XPLR (13999) |
| Diverge E5 [baabaceb] | gravel | 44 · 49 · 52 · 54 · 56 · 58 · 61 | 529 · 545 · 561 · 578 · 599 · 618 · 635 | 357 · 365 · 374 · 383 · 392 · 401 · 410 | — · — · — · — · — · — · — | Diverge E5 (1549) |
| Enduro Pro [54649f30] | mtb | S2 · S3 · S4 · S5 | 616 · 620 · 629 · 638 | 437 · 464 · 487 · 511 | 158–173 · 165–180 · 173–188 · 178–193 | Enduro Pro (6699) |
| Epic 8 Pro [67b9f449] | mtb | S · M · L · XL | 597 · 598 · 610 · 628 | 420 · 450 · 475 · 500 | — · — · — · — | Epic 8 Pro (7599) |
| Epic 9 Pro [5bd7416c] | mtb | S · M · L · XL | 594 · 604 · 618 · 645 | 420 · 450 · 480 · 505 | — · — · — · — | Epic 9 Comp (4999); Epic 9 Expert (6999); Epic 9 Pro (9499); Epic 9 Sport (4199); S-Works Epic 9 (14499); S-Works Epic 9 LTD: Built for Legends (15499) |
| Levo 4 EVO [4a9881ab] | emtb | S2 · S3 · S4 · S5 · S6 | 625 · 633 · 646 · 659 · 675 | 425 · 445 · 470 · 495 · 525 | — · — · — · — · — | Levo 4 EVO Comp (7499); Levo 4 EVO Comp Alloy (6499); Levo 4 EVO Pro (10999) |
| Rockhopper [8938a1a8] | mtb | XS - 27.5 · S - 27.5 · M - 27.5 · S - 29 · M - 29 · L - 29 · XL - 29 · XXL - 29 | 559 · 573 · 589 · 607 · 616 · 626 · 640 · 654 | 375 · 395 · 415 · 405 · 425 · 445 · 465 · 485 | — · — · — · — · — · — · — · — | Rockhopper Comp (949); Rockhopper Expert (1299) |
| Rockhopper [99b6e2c4] | mtb | XXS - 26 · XS - 27.5 · S - 27.5 · S - 29 · M - 27.5 · M - 29 · L - 29 · XL - 29 · XXL - 29 | 543 · 559 · 573 · 589 · 607 · 616 · 626 · 640 · 654 | 355 · 375 · 395 · 415 · 405 · 425 · 445 · 465 · 485 | — · — · — · — · — · — · — · — · — | Rockhopper (649) |
| Roubaix SL8 Sport 105 [a2eae2d5] | carretera | 44 · 49 · 52 · 54 · 56 · 58 · 61 | 543 · 549 · 566 · 585 · 605 · 630 · 665 | 353 · 363 · 370 · 381 · 389 · 397 · 403 | 142–155 · 155–163 · 163–170 · 170–175 · 175–180 · 180–188 · 188–196 | Roubaix SL8 Pro - SRAM Force AXS (7999); Roubaix SL8 Sport 105 (3299); Roubaix SL8: Shimano Tiagra (2499); S-Works Roubaix SL8 - Shimano Dura-Ace Di2 (10499); S-Works Roubaix SL8 – SRAM RED AXS (10499+) |
| Roubaix SL8 [c3df5ec3] | carretera | 44 · 49 · 52 · 54 · 56 · 58 · 61 | 543 · 549 · 566 · 585 · 605 · 630 · 665 | 353 · 363 · 370 · 381 · 389 · 397 · 403 | 142–155 · 155–163 · 163–170 · 170–175 · 175–180 · 180–188 · 188–196 | Roubaix SL8 (2499) |
| Roubaix SL8 [f1f17ed5] | carretera | 44 · 49 · 52 · 54 · 56 · 58 · 61 · 64 | 543 · 549 · 566 · 585 · 605 · 630 · 665 · 685 | 353 · 363 · 370 · 381 · 389 · 397 · 403 · 409 | — · — · — · — · — · — · — · — | Roubaix SL8 Comp (4299); Roubaix SL8 Expert - Shimano Ultegra Di2 (5999) |
| S-Works Aethos – Campagnolo LTD [7da9c890] | carretera | 49 · 52 · 54 · 56 · 58 · 61 | 514 · 527 · 544 · 565 · 591 · 612 | 375 · 380 · 384 · 395 · 402 · 408 | 155–163 · 163–170 · 170–175 · 175–180 · 180–188 · 188–196 | S-Works Aethos – Campagnolo LTD (10499) |
| S-Works Demo 11 [d104b5e8] | mtb | S3 · S4 · S5 | 640 · 640 · 640 | 445 · 475 · 500 | 168–180 · 175–188 · 185–206 | S-Works Demo 11 (12499); S-Works Demo 11 LTD: Built for Legends (13499) |
| S-Works Epic 8 [7135f585] | mtb | S · M · L · XL | 597 · 598 · 610 · 628 | 420 · 450 · 475 · 500 | — · — · — · — | S-Works Epic 8 (11599) |
| S-Works Epic 9 Ultralight LTD [43cf73de] | mtb | S · M · L · XL | 589 · 599 · 612 · 639 | 427 · 457 · 487 · 512 | — · — · — · — | S-Works Epic 9 Ultralight LTD (13999) |
| S-Works Levo 4 X [988a0a6a] | emtb | S2 · S3 · S4 · S5 · S6 | 618 · 626 · 638 · 652 · 667 | 435 · 455 · 480 · 505 · 535 | 157–173 · 165–180 · 173–188 · 178–193 · 188–203 | S-Works Levo 4 X (14499); S-Works Turbo Levo 4 (13999); Turbo Levo 4 Expert (9999); Turbo Levo 4 Pro (11999) |
| S-Works Stumpjumper 15 LTD [76f833c8] | mtb | S2 · S3 · S4 · S5 · S6 | 618 · 627 · 640 · 654 · 667 | 425 · 450 · 475 · 500 · 530 | 157–173 · 165–180 · 173–188 · 178–193 · 188–203 | S-Works Stumpjumper 15 LTD (14499) |
| S-Works Turbo Levo R Ultra Light [b86c61df] | emtb | S2 - 29 · S3 - 29 · S4 - 29 · S5 - 29 | 607 · 616 · 630 · 644 | 420 · 450 · 475 · 500 | — · — · — · — | S-Works Turbo Levo R Ultra Light (13999) |
| STATUS 2 170 ZERO [db93eb30] | mtb | S0 | 597 | 390 | 144–157 | STATUS 2 170 ZERO (3149) |
| Status 170 2 [3504ef13] | mtb | S1 · S2 · S3 · S4 · S5 | 620 · 625 · 634 · 643 · 652 | 420 · 445 · 470 · 495 · 520 | — · — · — · — · — | Status 170 2 (3149) |
| Stumpjumper 15 EVO Pro [f167adef] | mtb | S1 · S2 · S3 · S4 · S5 · S6 | 611 · 621 · 630 · 644 · 658 · 671 | 400 · 420 · 445 · 470 · 495 · 525 | 150–160 · 157–173 · 165–180 · 173–188 · 178–193 · 188–203 | S-Works Stumpjumper 15 EVO - Shimano XTR Di2, FOX Factory (12499); Stumpjumper 15 EVO Comp (6499); Stumpjumper 15 EVO Comp Alloy (4499); Stumpjumper 15 EVO Expert (6999); Stumpjumper 15 EVO Expert - FACT 11m carbon, FOX Performance Elite w/ GENIE, XT Di2 (6999); Stumpjumper 15 EVO Pro (8999) |
| Tarmac SL7 Sport - Shimano 105 [39f69c0b] | carretera | 44 · 49 · 52 · 54 · 56 · 58 · 61 | 501 · 514 · 527 · 544 · 565 · 591 · 612 | 366 · 375 · 380 · 384 · 395 · 402 · 408 | 142–155 · 155–163 · 163–170 · 170–175 · 175–180 · 180–188 · 188–196 | Tarmac SL7 Sport - Shimano 105 (3299) |
| Tarmac SL9 Comp: SRAM Rival AXS [8eb292f2] | carretera | 44 · 49 · 52 · 54 · 56 · 58 · 61 | 501 · 514 · 527 · 544 · 565 · 591 · 612 | 366 · 375 · 380 · 384 · 395 · 402 · 408 | 142–155 · 155–163 · 163–170 · 170–175 · 175–180 · 180–188 · 188–196 | S-Works Tarmac SL9 LTD: Built for Legends (14999); S-Works Tarmac SL9 LTD: Remco Evenepoel (14999); S-Works Tarmac SL9: SRAM RED AXS (13999); S-Works Tarmac SL9: Shimano Dura-Ace Di2 (13999); Tarmac SL9 Comp: SRAM Rival AXS (4499); Tarmac SL9 Comp: Shimano 105 Di2 (4499); Tarmac SL9 Expert: SRAM Force AXS (6999); Tarmac SL9 Expert: Shimano Ultegra Di2 (6999); Tarmac SL9 S-Level: SRAM RED AXS (10499); Tarmac SL9 S-Level: Shimano Dura-Ace Di2 (10499) |
| Turbo Kenevo SL 2 [335601a2] | emtb | S2 · S3 · S4 · S5 | 618 · 626 · 635 · 644 | 435 · 460 · 485 · 510 | 158–173 · 165–180 · 173–188 · 178–193 | Turbo Kenevo SL 2 Comp (5199); Turbo Kenevo SL 2 Expert (5999); Turbo Kenevo SL 2 Ohlins Coil (7799) |
| Turbo Levo 4 [a58a9052] | emtb | S1 · S2 · S3 · S4 · S5 · S6 | 609 · 618 · 626 · 638 · 652 · 667 | 407 · 435 · 455 · 480 · 505 · 535 | 150–160 · 157–173 · 165–180 · 173–188 · 178–193 · 188–203 | Turbo Levo 4 Alloy (5499); Turbo Levo 4 Comp Alloy (6499) |
| Turbo Levo R Pro [dd58c52f] | emtb | S2 - 29 · S3 - 29 · S4 - 29 · S5 - 29 · S6 - 29 | 607 · 616 · 630 · 644 · 657 | 420 · 450 · 475 · 500 · 525 | — · — · — · — · — | S-Works Turbo Levo R (13999); Turbo Levo R Pro (11999) |
| Turbo Levo R [b2b6fdfe] | emtb | S1 - 27.5 · S2 - 29 · S3 - 29 · S4 - 29 · S5 - 29 · S6 - 29 | 602 · 607 · 616 · 630 · 644 · 657 | 400 · 420 · 450 · 475 · 500 · 525 | — · — · — · — · — · — | Turbo Levo R Comp (7999); Turbo Levo R Comp Alloy (6499); Turbo Levo R Expert (9999) |

<details><summary>Tallas rechazadas por la validación</summary>

- Chisel Comp XS: stack decrece al subir de talla (S: 593 < 602.3)
- Chisel Comp S: stack decrece al subir de talla (S: 593 < 602.3)
- Chisel Comp M: stack decrece al subir de talla (S: 593 < 602.3)
- Chisel Comp L: stack decrece al subir de talla (S: 593 < 602.3)
- Chisel Comp XL: stack decrece al subir de talla (S: 593 < 602.3)
- Chisel XS: stack decrece al subir de talla (S: 593 < 602.3)
- Chisel S: stack decrece al subir de talla (S: 593 < 602.3)
- Chisel M: stack decrece al subir de talla (S: 593 < 602.3)
- Chisel L: stack decrece al subir de talla (S: 593 < 602.3)
- Chisel XL: stack decrece al subir de talla (S: 593 < 602.3)
- Chisel Comp EVO XS: stack decrece al subir de talla (S: 596 < 606)
- Chisel Comp EVO S: stack decrece al subir de talla (S: 596 < 606)
- Chisel Comp EVO M: stack decrece al subir de talla (S: 596 < 606)
- Chisel Comp EVO L: stack decrece al subir de talla (S: 596 < 606)
- Chisel Comp EVO XL: stack decrece al subir de talla (S: 596 < 606)
- Epic 8 Expert Di2 XS: stack decrece al subir de talla (S: 597 < 603)
- Epic 8 Expert Di2 S: stack decrece al subir de talla (S: 597 < 603)
- Epic 8 Expert Di2 M: stack decrece al subir de talla (S: 597 < 603)
- Epic 8 Expert Di2 L: stack decrece al subir de talla (S: 597 < 603)
- Epic 8 Expert Di2 XL: stack decrece al subir de talla (S: 597 < 603)
- Epic 8 Expert XS: stack decrece al subir de talla (S: 597 < 603)
- Epic 8 Expert S: stack decrece al subir de talla (S: 597 < 603)
- Epic 8 Expert M: stack decrece al subir de talla (S: 597 < 603)
- Epic 8 Expert L: stack decrece al subir de talla (S: 597 < 603)
- Epic 8 Expert XL: stack decrece al subir de talla (S: 597 < 603)
- Rockhopper Sport XS - 27.5: reach decrece al subir de talla (M - 29: 405 < 415)
- Rockhopper Sport S - 27.5: reach decrece al subir de talla (M - 29: 405 < 415)
- Rockhopper Sport M - 27.5: reach decrece al subir de talla (M - 29: 405 < 415)
- Rockhopper Sport S - 29: reach decrece al subir de talla (M - 29: 405 < 415)
- Rockhopper Sport M - 29: reach decrece al subir de talla (M - 29: 405 < 415)
- Rockhopper Sport L - 29: reach decrece al subir de talla (M - 29: 405 < 415)
- Rockhopper Sport XXL - 29: reach decrece al subir de talla (M - 29: 405 < 415)
- Rockhopper Sport XL - 29: reach decrece al subir de talla (M - 29: 405 < 415)

</details>

<details><summary>Productos en alcance sin datos</summary>

- https://www.specialized.com/es/es/roubaix-sl8-comp-sram-rival-axs/p/4263268 — sin tabla de geometría en la página
- https://www.specialized.com/es/es/rockhopper-sport/p/4263616 — sin tabla de geometría en la página
- https://www.specialized.com/es/es/rockhopper-expert/p/4279941 — sin tabla de geometría en la página
- https://www.specialized.com/es/es/rockhopper-sport/p/4279942 — sin tabla de geometría en la página
- https://www.specialized.com/es/es/turbo-levo-4-comp/p/4263410 — sin tabla de geometría en la página

</details>

<details><summary>Avisos</summary>

- Allez Comp: guía de tallas 'Allez' no cubre todas las tallas ['44', '49', '52', '54', '56', '58', '61']: sin altura
- Allez Sport - Shimano Tiagra: guía de tallas 'Allez' no cubre todas las tallas ['44', '49', '52', '54', '56', '58', '61']: sin altura
- Allez: guía de tallas 'Allez' no cubre todas las tallas ['44', '49', '52', '54', '56', '58', '61']: sin altura
- Roubaix SL8 Expert - Shimano Ultegra Di2: guía de tallas 'Roubaix' no cubre todas las tallas ['44', '49', '52', '54', '56', '58', '61', '64']: sin altura
- Roubaix SL8 Comp: guía de tallas 'Roubaix' no cubre todas las tallas ['44', '49', '52', '54', '56', '58', '61', '64']: sin altura
- S-Works Diverge 4: SRAM RED XPLR: guía de tallas 'Diverge' no cubre todas las tallas ['49', '52', '54', '56', '58', '61']: sin altura
- Diverge 4 Pro LTD - Shimano XTR/GRX Di2: guía de tallas 'Diverge' no cubre todas las tallas ['49', '52', '54', '56', '58', '61']: sin altura
- Diverge 4 Pro: SRAM Force XPLR: guía de tallas 'Diverge' no cubre todas las tallas ['49', '52', '54', '56', '58', '61']: sin altura
- Diverge 4 Pro - SRAM Force XPLR: guía de tallas 'Diverge' no cubre todas las tallas ['49', '52', '54', '56', '58', '61']: sin altura
- Diverge 4 Expert - Shimano GRX Di2: guía de tallas 'Diverge' no cubre todas las tallas ['49', '52', '54', '56', '58', '61']: sin altura
- Diverge 4 Expert: SRAM Rival XPLR: guía de tallas 'Diverge' no cubre todas las tallas ['49', '52', '54', '56', '58', '61']: sin altura
- Diverge 4 Expert - SRAM Rival XPLR: guía de tallas 'Diverge' no cubre todas las tallas ['49', '52', '54', '56', '58', '61']: sin altura
- Diverge 4 Comp Carbon - SRAM Apex AXS/S1000: guía de tallas 'Diverge' no cubre todas las tallas ['49', '52', '54', '56', '58', '61']: sin altura
- Diverge 4 Sport Carbon - Shimano GRX 600: guía de tallas 'Diverge' no cubre todas las tallas ['49', '52', '54', '56', '58', '61']: sin altura
- Diverge 4 Comp Alloy - SRAM Apex: guía de tallas 'Diverge' no cubre todas las tallas ['49', '52', '54', '56', '58', '61']: sin altura
- Diverge 4 Sport Alloy - Shimano CUES: guía de tallas 'Diverge' no cubre todas las tallas ['49', '52', '54', '56', '58', '61']: sin altura
- Diverge E5: guía de tallas 'Diverge' no cubre todas las tallas ['44', '49', '52', '54', '56', '58', '61']: sin altura
- S-Works Epic 9 LTD: Built for Legends: guía de tallas 'Epic 9' no cubre todas las tallas ['S', 'M', 'L', 'XL']: sin altura
- S-Works Epic 9: guía de tallas 'Epic 9' no cubre todas las tallas ['S', 'M', 'L', 'XL']: sin altura
- S-Works Epic 9 Ultralight LTD: guía de tallas 'Epic 9' no cubre todas las tallas ['S', 'M', 'L', 'XL']: sin altura
- Epic 9 Pro: guía de tallas 'Epic 9' no cubre todas las tallas ['S', 'M', 'L', 'XL']: sin altura
- Epic 9 Expert: guía de tallas 'Epic 9' no cubre todas las tallas ['S', 'M', 'L', 'XL']: sin altura
- Epic 9 Comp: guía de tallas 'Epic 9' no cubre todas las tallas ['S', 'M', 'L', 'XL']: sin altura
- Epic 9 Sport: guía de tallas 'Epic 9' no cubre todas las tallas ['S', 'M', 'L', 'XL']: sin altura
- S-Works Epic 8: guía de tallas 'Epic' no cubre todas las tallas ['S', 'M', 'L', 'XL']: sin altura
- Epic 8 Pro: guía de tallas 'Epic' no cubre todas las tallas ['S', 'M', 'L', 'XL']: sin altura
- Epic 8 Expert Di2: guía de tallas 'Epic' no cubre todas las tallas ['XS', 'S', 'M', 'L', 'XL']: sin altura
- Epic 8 Expert: guía de tallas 'Epic' no cubre todas las tallas ['XS', 'S', 'M', 'L', 'XL']: sin altura
- Rockhopper Expert: guía de tallas 'Rockhopper' no cubre todas las tallas ['XS - 27.5', 'S - 27.5', 'M - 27.5', 'S - 29', 'M - 29', 'L - 29', 'XL - 29', 'XXL - 29']: sin altura
- Rockhopper Comp: guía de tallas 'Rockhopper' no cubre todas las tallas ['XS - 27.5', 'S - 27.5', 'M - 27.5', 'S - 29', 'M - 29', 'L - 29', 'XL - 29', 'XXL - 29']: sin altura
- Rockhopper Sport: guía de tallas 'Rockhopper' no cubre todas las tallas ['XS - 27.5', 'S - 27.5', 'M - 27.5', 'S - 29', 'M - 29', 'L - 29', 'XXL - 29', 'XL - 29']: sin altura
- Rockhopper: guía de tallas 'Rockhopper' no cubre todas las tallas ['XXS - 26', 'XS - 27.5', 'S - 27.5', 'S - 29', 'M - 27.5', 'M - 29', 'L - 29', 'XL - 29', 'XXL - 29']: sin altura
- Status 170 2: guía de tallas 'Status' no cubre todas las tallas ['S1', 'S2', 'S3', 'S4', 'S5']: sin altura
- S-Works Turbo Levo R Ultra Light: guía de tallas 'Turbo Levo R' no cubre todas las tallas ['S2 - 29', 'S3 - 29', 'S4 - 29', 'S5 - 29']: sin altura
- S-Works Turbo Levo R: guía de tallas 'Turbo Levo R' no cubre todas las tallas ['S2 - 29', 'S3 - 29', 'S4 - 29', 'S5 - 29', 'S6 - 29']: sin altura
- Turbo Levo R Pro: guía de tallas 'Turbo Levo R' no cubre todas las tallas ['S2 - 29', 'S3 - 29', 'S4 - 29', 'S5 - 29', 'S6 - 29']: sin altura
- Turbo Levo R Expert: guía de tallas 'Turbo Levo R' no cubre todas las tallas ['S1 - 27.5', 'S2 - 29', 'S3 - 29', 'S4 - 29', 'S5 - 29', 'S6 - 29']: sin altura
- Turbo Levo R Comp: guía de tallas 'Turbo Levo R' no cubre todas las tallas ['S1 - 27.5', 'S2 - 29', 'S3 - 29', 'S4 - 29', 'S5 - 29', 'S6 - 29']: sin altura
- Turbo Levo R Comp Alloy: guía de tallas 'Turbo Levo R' no cubre todas las tallas ['S1 - 27.5', 'S2 - 29', 'S3 - 29', 'S4 - 29', 'S5 - 29', 'S6 - 29']: sin altura

</details>

Descartados: excluido por nombre (cuadro, kit, junior…): 27, duplicado (mismo modelo): 9

## Scott — con avisos

Diff con bikes.csv: **+389** tallas nuevas, **−0** que desaparecen, **~0** con cambios. Productos candidatos: 178. Métodos: html. Descargas: {'httpx': 0, 'browser': 0, 'cache': 179, 'challenges': 0}.

| Familia | Cat. | Tallas | Stack | Reach | Altura (cm) | Modelos (precio €) |
|---|---|---|---|---|---|---|
| Scott Addict Gravel [5a4a3bfc] | gravel | XS/49 · S/52 · M/54 · L/56 · XL/58 | 519 · 544.4 · 565.3 · 589.9 · 609.7 | 374.1 · 378.4 · 387.1 · 398.2 · 406.1 | — · — · — · — · — | Scott Addict Gravel 10 (s/p); Scott Addict Gravel 30 (s/p); Scott Addict Gravel Tuned (s/p) |
| Scott Addict Gravel [6efd1be9] | gravel | XXS/47 · XS/49 · S/52 · M/54 · L/56 · XL/58 · XXL/61 | 520 · 532 · 555 · 575 · 596 · 614 · 633 | 383 · 390 · 394 · 398 · 401 · 407 · 415 | — · — · — · — · — · — · — | Scott Addict Gravel 40 (2899); Scott Addict Gravel Premium (9499) |
| Scott Addict RC [f396a2bb] | carretera | XXS/47 · XS/49 · S/52 · M/54 · L/56 · XL/58 · XXL/61 | 501.3 · 512.5 · 525.5 · 543.3 · 564.5 · 584.3 · 604.2 | 379.4 · 386.3 · 391.6 · 395.2 · 402.6 · 406.1 · 411.3 | — · — · — · — · — · — · — | Scott Addict RC 10 (6899); Scott Addict RC 25 Bike (s/p); Scott Addict RC 30 (5099); Scott Addict RC Pro (s/p); Scott Addict RC Team (7299) |
| Scott Addict [2edc4ac1] | carretera | XXS/47 · XS/49 · S/52 · M/54 · L/56 · XL/58 · XXL/61 | 522 · 534 · 557 · 578 · 599 · 619 · 638 | 372 · 378 · 382 · 386 · 389 · 394 · 402 | — · — · — · — · — · — · — | Scott Addict 10 (6799); Scott Addict 25 (5199); Scott Addict 30 (3899); Scott Addict 40 (3349); Scott Addict 50 (2699); Scott Addict Premium (7799) |
| Scott Aspect eRIDE 910 [3d88b955] | emtb | XS · S · M · L · XL | 663 · 663 · 668.6 · 677.8 · 687 | 412.2 · 412.2 · 430.8 · 448.5 · 466.2 | — · — · — · — · — | Scott Aspect eRIDE 910 (3689.1) |
| Scott Aspect eRIDE 920 blue [67fd7013] | emtb | S / 900 · M / 900 · L / 900 · XL / 900 | 643.6 · 652.8 · 662.1 · 680.7 | 395.5 · 402.8 · 410.1 · 414.8 | — · — · — · — | Scott Aspect eRIDE 920 blue (s/p) |
| Scott Aspect eRIDE [792c99fc] | emtb | S / 900 · M / 900 · L / 900 · XL / 900 | 696 · 696 · 705 · 705 | 399 · 419 · 437 · 437 | — · — · — · — | Scott Aspect eRIDE 900 Wave (4049.1); Scott Aspect eRIDE 910 Wave (3689.1) |
| Scott Contessa Genius ST 910 TR [b07be565] | mtb | S · M · L · XL | 617 · 626.1 · 644.2 · 657.8 | 430 · 460 · 485 · 510 | — · — · — · — | Scott Contessa Genius ST 910 TR (s/p) |
| Scott Contrail 400 [1df797f8] | mtb | 24" | 536.2 | 366.1 | — | Scott Contrail 400 (560) |
| Scott Contrail [41092892] | mtb | XS / 700 · S / 900 · M / 900 · L / 900 · XL / 900 · XXL | 576 · 609.5 · 618.5 · 632.5 · 641.7 · 655.5 | 390.7 · 411.7 · 429.2 · 455.5 · 473 · 499.3 | — · — · — · — · — · — | Scott Contrail 10 (854.1); Scott Contrail 30 (749); Scott Contrail 40 (649) |
| Scott Foil RC [0787332a] | carretera | XXS/47 · XS/49 · S/52 · M/54 · L/56 · XL/58 · XXL/61 | 505 · 511 · 527 · 548 · 568 · 589 · 606 | 380 · 388 · 389 · 389 · 394.5 · 400 · 409 | — · — · — · — · — · — · — | Scott Foil RC 10 (6199); Scott Foil RC Pro (s/p); Scott Foil RC TRI (6999); Scott Foil RC Team (7299); Scott Foil RC Team Replica (12399) |
| Scott Gambler [9c73667b] | mtb | M · L · XL | 648 · 648 · 648 | 433 · 458 · 483 | — · — · — | Scott Gambler 10 (6099); Scott Gambler RC (9399) |
| Scott Lumen [3682f10d] | emtb | S · M · L · XL | 615 · 615 · 625 · 638 | 416 · 446 · 476 · 501 | — · — · — · — | Scott Lumen 900 (s/p); Scott Lumen 910 (8399); Scott Lumen 920 (6749) |
| Scott Patron ST [32ff2f22] | emtb | S · M · L · XL | 650.5 · 655 · 664.2 · 673.3 | 428.3 · 448.3 · 473.9 · 503.4 | — · — · — · — | Scott Patron ST 10 (s/p); Scott Patron ST Tuned (10399) |
| Scott Patron ST [f7798786] | emtb | S · M · L · XL | 650.5 · 655 · 664.2 · 673.3 | 428.3 · 448.3 · 473.9 · 503.4 | — · — · — · — | Scott Patron ST 900 (s/p); Scott Patron ST 900 Tuned (s/p); Scott Patron ST 910 (s/p) |
| Scott Patron [ab9c35b8] | emtb | S · M · L · XL | 643 · 647.4 · 656.3 · 665.1 | 439.4 · 459.3 · 484.7 · 514.2 | — · — · — · — | Scott Patron 900 (s/p); Scott Patron 900 Ultimate (s/p); Scott Patron 910 (s/p); Scott Patron 920 (s/p); Scott Patron 930 (s/p) |
| Scott Patron [b83ef01d] | emtb | S · M · L · XL | 643 · 647.4 · 656.3 · 665.1 | 439.4 · 459.3 · 484.7 · 514.2 | — · — · — · — | Scott Patron 10 (s/p); Scott Patron 30 (s/p) |
| Scott Ransom 910 [e5fdb427] | mtb | S · M · L · XL | 614.8 · 619.3 · 632.8 · 641.7 | 428 · 458 · 483 · 508 | — · — · — · — | Scott Ransom 910 (7099) |
| Scott Ransom [fa1e9963] | mtb | S · M · L · XL | 614.8 · 619.3 · 632.8 · 641.7 | 428 · 458 · 483 · 508 | — · — · — · — | Scott Ransom 10 (5999); Scott Ransom RC (7999) |
| Scott Scale [25db3a35] | mtb | S · M · L · XL | 600.3 · 604.9 · 618.9 · 628.1 | 418.5 · 442.3 · 463.6 · 491.2 | — · — · — · — | Scott Scale 910 (2249.1); Scott Scale 920 (1799.1); Scott Scale Gravel RC (5099); Scott Scale RC Team (3149.1); Scott Scale RC World Cup (7559.1) |
| Scott Scale [8c9d20c6] | mtb | XS · S · M · L · XL · XXL | 596.1 · 596.1 · 605.3 · 614.6 · 623.8 · 623.8 | 400.3 · 420.3 · 442.8 · 463.3 · 492.9 · 512.9 | — · — · — · — · — · — | Scott Scale 10 (2299); Scott Scale 30 (1799); Scott Scale 40 (1599); Scott Scale 50 (1299); Scott Scale 60 (1099) |
| Scott Scale [e7084d00] | mtb | S · M · L · XL | 600.3 · 604.9 · 618.9 · 628.1 | 418.5 · 442.3 · 463.6 · 491.2 | — · — · — · — | Scott Scale Gravel 10 (5199); Scott Scale Gravel 30 (1599); Scott Scale RC Comp (2799); Scott Scale RC Expert (3799) |
| Scott Spark RC [8dd6ebcb] | mtb | S · M · L · XL | 602.5 · 602.5 · 616 · 625 | 411 · 441 · 471 · 501 | — · — · — · — | Scott Spark RC Comp (3526.7); Scott Spark RC SL (12834.1); Scott Spark RC World Cup EVO (10454.1) |
| Scott Spark [f0f9841f] | mtb | S · M · L · XL | 607.5 · 607.5 · 617.7 · 627 | 410 · 440 · 470 · 500 | — · — · — · — | Scott Spark 900 EVO (7649.1); Scott Spark 920 (4229.1) |
| Scott Speedster Gravel [a9336be0] | gravel | XXS/47 · XS/49 · S/52 · M/54 · L/56 · XL/58 · XXL/61 | 523.7 · 533.1 · 551.9 · 574.8 · 593.7 · 612.6 · 631.5 | 372.3 · 376.3 · 380.3 · 385.4 · 390.4 · 394.4 · 401.4 | — · — · — · — · — · — · — | Scott Speedster Gravel 10 (2199); Scott Speedster Gravel 30 (1799); Scott Speedster Gravel 30 black (s/p); Scott Speedster Gravel 40 (1599) |
| Scott Voltage [97773058] | emtb | S · M · L · XL | 622.3 · 622.4 · 631.3 · 640.2 | 437.4 · 457.2 · 485 · 512.7 | — · — · — · — | Scott Voltage 900 Tuned (9899.1); Scott Voltage 910 (7918.2); Scott Voltage 920 (s/p); Scott Voltage eRIDE 920 (s/p) |

<details><summary>Tallas rechazadas por la validación</summary>

- Scott Speedster 10 XXS/47: reach decrece al subir de talla (L/56: 385 < 391)
- Scott Speedster 10 XS/49: reach decrece al subir de talla (L/56: 385 < 391)
- Scott Speedster 10 S/52: reach decrece al subir de talla (L/56: 385 < 391)
- Scott Speedster 10 M/54: reach decrece al subir de talla (L/56: 385 < 391)
- Scott Speedster 10 L/56: reach decrece al subir de talla (L/56: 385 < 391)
- Scott Speedster 10 XL/58: reach decrece al subir de talla (L/56: 385 < 391)
- Scott Speedster 10 XXL/61: reach decrece al subir de talla (L/56: 385 < 391)
- Scott Contrail 160 16'': stack=325.8 fuera del rango plausible [480, 780]; reach=276.4 fuera del rango plausible [340, 560]
- Scott Contrail 200 20": stack=460.7 fuera del rango plausible [480, 780]; reach=312.3 fuera del rango plausible [340, 560]

</details>

<details><summary>Productos en alcance sin datos</summary>

- https://www.scott-sports.com/es/es/product/scott-strike-40-bike — sin tabla de geometría en la página
- https://www.scott-sports.com/es/es/product/scott-spark-dc-40-bike — sin tabla de geometría en la página
- https://www.scott-sports.com/es/es/product/scott-overland-10-bike — sin tabla de geometría en la página
- https://www.scott-sports.com/es/es/product/scott-overland-30-bike — sin tabla de geometría en la página
- https://www.scott-sports.com/es/es/product/scott-spark-dc-factory-bike — sin tabla de geometría en la página
- https://www.scott-sports.com/es/es/product/scott-spark-dc-30-bike — sin tabla de geometría en la página
- https://www.scott-sports.com/es/es/product/scott-spark-dc-10-bike — sin tabla de geometría en la página
- https://www.scott-sports.com/es/es/product/scott-strike-10-bike — sin tabla de geometría en la página
- https://www.scott-sports.com/es/es/product/scott-strike-30-bike — sin tabla de geometría en la página

</details>

<details><summary>Avisos</summary>

- Scott Gambler RC: varias posiciones de geometría por talla: se usa la primera publicada
- Scott Gambler 10: varias posiciones de geometría por talla: se usa la primera publicada

</details>

Descartados: fuera de alcance (categoría): 89

## Canyon — OK

Diff con bikes.csv: **+556** tallas nuevas, **−0** que desaparecen, **~0** con cambios. Productos candidatos: 141. Métodos: html. Descargas: {'httpx': 0, 'browser': 0, 'cache': 100, 'challenges': 0}.

| Familia | Cat. | Tallas | Stack | Reach | Altura (cm) | Modelos (precio €) |
|---|---|---|---|---|---|---|
| Aeroad CF SLX [37885561] | carretera | 2XS · XS · S · M · L · XL · 2XL | 498 · 520 · 539 · 560 · 580 · 606 · 624 | 372 · 378 · 390 · 393 · 401 · 419 · 429 | ≤–166 · 166–172 · 172–178 · 178–184 · 184–190 · 190–196 · 196–∞ | Aeroad CF SLX 7 AXS (4799); Aeroad CF SLX 7 Di2 (4799); Aeroad CF SLX 8 AXS (5999); Aeroad CF SLX 8 Di2 (5999); Aeroad CF SLX 9 AXS (7999); Aeroad CF SLX 9 Di2 (7499) |
| Aeroad CFR Disc Frame and Brake Kit [5208ed4f] | carretera | 2XS · XS · S · M · L · XL · 2XL | 498 · 520 · 539 · 560 · 580 · 606 · 624 | 372 · 378 · 390 · 393 · 401 · 419 · 429 | ≤–166 · 166–172 · 172–178 · 178–184 · 184–190 · 190–196 · 196–∞ | Aeroad CFR Disc Frame and Brake Kit (3499) |
| Aeroad CFR [23f5a840] | carretera | 2XS · XS · S · M · L · XL · 2XL | 498 · 520 · 539 · 560 · 580 · 606 · 624 | 372 · 378 · 390 · 393 · 401 · 419 · 429 | ≤–166 · 166–172 · 172–178 · 178–184 · 184–190 · 190–196 · 196–∞ | Aeroad CFR AXS (9000); Aeroad CFR Di2 (9000); Aeroad CFR LTD (9500) |
| Endurace AllRoad [a32eea6d] | carretera | 2XS · XS · S · M · L · XL · 2XL | 552 · 554 · 570 · 594 · 616 · 640 · 660 | 371 · 377 · 391 · 397 · 407 · 425 · 438 | ≤–165 · 165–171 · 171–178 · 178–185 · 185–192 · 192–198 · 198–∞ | Endurace AllRoad (1099) |
| Endurace CF SLX 9 Di2 [c38bb725] | carretera | 2XS · XS · S · M · L · XL · 2XL | 524 · 545 · 565 · 586 · 608 · 633 · 652 | 378 · 383 · 386 · 388 · 397 · 405 · 415 | ≤–165 · 165–171 · 171–178 · 178–185 · 185–192 · 192–198 · 198–∞ | Endurace CF SLX 9 Di2 (6999) |
| Endurace CF SLX [fa7214a7] | carretera | 2XS · XS · S · M · L · XL · 2XL | 524 · 545 · 565 · 586 · 608 · 633 · 652 | 378 · 383 · 386 · 388 · 397 · 405 · 415 | ≤–165 · 165–171 · 171–178 · 178–185 · 185–192 · 192–198 · 198–∞ | Endurace CF SLX 7 AXS (3999); Endurace CF SLX 7 Di2 (3999); Endurace CF SLX 8 Di2 (4499) |
| Endurace CF [92dbbfec] | carretera | 2XS · XS · S · M · L · XL · 2XL | 525 · 545 · 563 · 584 · 605 · 629 · 649 | 382 · 386 · 390 · 392 · 401 · 409 · 427 | ≤–165 · 165–171 · 171–178 · 178–185 · 185–192 · 192–198 · 198–∞ | Endurace CF 6 (1699); Endurace CF 7 (2299); Endurace CF 7 AXS (2999); Endurace CF 8 Di2 (3299) |
| Endurace CFR AXS [84e6533a] | carretera | 2XS · XS · S · M · L · XL | 499 · 523 · 542 · 563 · 583 · 609 | 375 · 381 · 390 · 393 · 401 · 419 | ≤–166 · 166–172 · 172–178 · 178–184 · 184–190 · 190–∞ | Endurace CFR AXS (9000) |
| Endurace CFR Di2 [bc469e82] | carretera | 2XS · XS · S · M · L · XL | 499 · 523 · 542 · 563 · 583 · 609 | 375 · 381 · 390 · 393 · 401 · 419 | ≤–166 · 166–172 · 172–178 · 178–184 · 184–190 · 190–∞ | Endurace CFR Di2 (9000) |
| Exceed CF [6409533a] | mtb | XS · S · M · L · XL | 600 · 604 · 613 · 632 · 646 | 408 · 425 · 447 · 465 · 485 | ≤–166 · 166–175 · 175–183 · 183–192 · 192–∞ | Exceed CF 8 (2999); Exceed CF 9 (3999) |
| Exceed CFR Gravel [e7390518] | mtb | S · M · L · XL | 590 · 595 · 604 · 623 | 408 · 425 · 447 · 465 | ≤–175 · 175–183 · 183–192 · 192–∞ | Exceed CFR Gravel (3999) |
| Exceed [124b87ba] | mtb | XS · S · M · L · XL | 600 · 604 · 613 · 632 · 646 | 408 · 425 · 447 · 465 · 485 | ≤–166 · 166–175 · 175–183 · 183–192 · 192–∞ | Exceed CF 7 (1999); Exceed CFR (5999) |
| Grail [926c41cc] | gravel | 2XS · XS · S · M · L · XL · 2XL | 525 · 537 · 558 · 575 · 598 · 618 · 640 | 372 · 385 · 394 · 411 · 427 · 435 · 454 | ≤–166 · 166–172 · 172–178 · 178–184 · 184–190 · 190–196 · 196–∞ | Grail CF 7 (2499); Grail CF 7 Speed (3499); Grail CF SLX 7 Di2 (3999); Grail CF SLX 8 AXS (4999); Grail CFR AXS (8000); Grail CFR Di2 (6500) |
| Grand Canyon AL [a56a45c5] | mtb | XS · S · M · L · XL | 587 · 608 · 622 · 640 · 658 | 410 · 430 · 450 · 470 · 490 | ≤–166 · 166–175 · 175–183 · 183–192 · 192–∞ | Grand Canyon AL 6 (799); Grand Canyon AL 7 (999); Grand Canyon AL 8 (1299); Grand Canyon AL 9 (1699) |
| Grand Canyon:ON AL [b8b7ec2a] | emtb | S · M · L · XL | 662 · 662 · 680 · 703 | 419 · 439 · 458 · 478 | ≤–174 · 174–183 · 183–192 · 192–∞ | Grand Canyon:ON AL 7 (2799); Grand Canyon:ON AL 8 (3499) |
| Grizl CF 7 [e43526c2] | gravel | 2XS · XS · S · M · L · XL · 2XL | 550 · 559 · 578 · 596 · 619 · 638 · 660 | 369 · 380 · 388 · 404 · 420 · 429 · 448 | ≤–166 · 166–172 · 172–178 · 178–184 · 184–190 · 190–196 · 196–∞ | Grizl CF 7 (2399); Grizl CF 7 AXS (2999) |
| Grizl CF 8 w/ RIFT [e8e5a2ee] | gravel | 2XS · XS · S · M · L · XL · 2XL | 550 · 559 · 578 · 596 · 619 · 638 · 660 | 369 · 380 · 388 · 404 · 420 · 429 · 448 | ≤–166 · 166–172 · 172–178 · 178–184 · 184–190 · 190–196 · 196–∞ | Grizl CF 8 w/ RIFT (3499) |
| Grizl CF [860031b2] | gravel | 2XS · XS · S · M · L · XL · 2XL | 550 · 559 · 578 · 596 · 619 · 638 · 660 | 369 · 380 · 388 · 404 · 420 · 429 · 448 | ≤–166 · 166–172 · 172–178 · 178–184 · 184–190 · 190–196 · 196–∞ | Grizl CF 6 (1999); Grizl CF 8 ESC w/ ECLIPS (3999); Grizl CF 9 w/ ECLIPS (7999) |
| Grizl [9051774c] | gravel | 2XS · XS · S · M · L · XL · 2XL | 550 · 559 · 578 · 596 · 619 · 638 · 660 | 369 · 380 · 388 · 404 · 420 · 429 · 448 | ≤–166 · 166–172 · 172–178 · 178–184 · 184–190 · 190–196 · 196–∞ | Grizl 5 (1299); Grizl 6 (1799); Grizl 7 ESC (1999); Grizl CF 7 ESC (2299); Grizl CF 8 Di2 (3299) |
| Lux Trail CF [c5c93a9d] | mtb | XS · S · M · L · XL | 603 · 603 · 605 · 616 · 632 | 410 · 430 · 450 · 470 · 490 | ≤–166 · 166–175 · 175–183 · 183–192 · 192–∞ | Lux Trail CF 6 (2999); Lux Trail CF 7 (3999); Lux Trail CF 8 (4999); Lux Trail CF 9 (5999) |
| Lux World Cup CF 9 [6541f85b] | mtb | XS · S · M · L · XL | 595 · 595 · 597 · 609 · 620 | 415 · 435 · 455 · 475 · 495 | ≤–166 · 166–175 · 175–183 · 183–192 · 192–∞ | Lux World Cup CF 9 (3999) |
| Lux World Cup CFR [4acd9ccf] | mtb | XS · S · M · L · XL | 595 · 595 · 597 · 607 · 620 | 415 · 435 · 455 · 475 · 495 | ≤–166 · 166–175 · 175–183 · 183–192 · 192–∞ | Lux World Cup CFR X0 AXS (5999); Lux World Cup CFR XT Di2 (4999); Lux World Cup CFR XTR Di2 (7999); Lux World Cup CFR XX SL AXS (7499) |
| Neuron [169bf954] | mtb | XS · S · M · L · XL | 587 · 596 · 626 · 639 · 656 | 410 · 430 · 455 · 480 · 510 | ≤–166 · 166–175 · 175–183 · 183–192 · 192–∞ | Neuron 5 (1999); Neuron 6 (2499); Neuron 7 (2999) |
| Neuron:ON [d380c415] | emtb | XS · S · M · L · XL | 626 · 637 · 647 · 656 · 666 | 414 · 429 · 455 · 480 · 505 | ≤–166 · 166–175 · 175–183 · 183–192 · 192–∞ | Neuron:ON 7 (3999); Neuron:ON 8 (4499); Neuron:ON 9 AXS (5499) |
| Neuron:ONfly CF 7 [6760443d] | emtb | XS · S · M · L · XL | 608 · 626 · 635 · 644 · 653 | 410 · 435 · 460 · 485 · 510 | ≤–166 · 166–175 · 175–183 · 183–192 · 192–∞ | Neuron:ONfly CF 7 (4499) |
| Sender CFR [3d171917] | mtb | S · M · L · XL | 626 · 630 · 635 · 639 | 443 · 468 · 495 · 518 | ≤–177 · 172–185 · 180–194 · 189–∞ | Sender CFR CLLCTV (6499); Sender CFR Underdog (4999) |
| Spectral CF 9 [6a794abf] | mtb | XS · S · M · L · XL | 612 · 621 · 630 · 639 · 648 | 425 · 450 · 475 · 500 · 525 | ≤–168 · 163–177 · 172–185 · 180–194 · 189–∞ | Spectral CF 9 (4999) |
| Spectral CF [905ad726] | mtb | XS · S · M · L · XL | 612 · 621 · 630 · 639 · 648 | 425 · 450 · 475 · 500 · 525 | ≤–168 · 163–177 · 172–185 · 180–194 · 189–∞ | Spectral CF 7 (2999); Spectral CF 8 (3999) |
| Spectral [60667daf] | mtb | XS · S · M · L · XL | 612 · 621 · 630 · 639 · 648 | 425 · 450 · 475 · 500 · 525 | ≤–168 · 163–177 · 172–185 · 180–194 · 189–∞ | Spectral 5 (2299); Spectral 6 (2699); Spectral AL LTD (3499) |
| Spectral:ON CF 8 [d1610dfc] | emtb | S · M · L · XL | 630 · 639 · 648 · 661 | 435 · 460 · 485 · 510 | ≤–175 · 175–183 · 183–192 · 192–∞ | Spectral:ON CF 8 (4499) |
| Spectral:ON CF [5cf62e43] | emtb | S · M · L · XL | 630 · 639 · 648 · 657 | 435 · 460 · 485 · 510 | ≤–175 · 175–183 · 183–192 · 192–∞ | Spectral:ON CF 7 (3999); Spectral:ON CF 9 Di2 (4999) |
| Spectral:ON CFR [cc55a030] | emtb | S · M · L · XL | 634 · 643 · 652 · 661 | 435 · 460 · 485 · 510 | ≤–175 · 175–183 · 183–192 · 192–∞ | Spectral:ON CFR (5999) |
| Spectral:ONfly CF [572fae4d] | emtb | S · M · L · XL | 620 · 629 · 638 · 647 | 445 · 470 · 495 · 520 | ≤–175 · 175–183 · 183–192 · 192–∞ | Spectral:ONfly CF 8 (2999); Spectral:ONfly CF 9 (3499) |
| Strive:ON [fa21c382] | emtb | S · M · L · XL | 630 · 639 · 648 · 661 | 450 · 475 · 500 · 525 | ≤–177 · 172–185 · 180–194 · 189–∞ | Strive:ON CF 8 (4999); Strive:ON CF 9 (4999); Strive:ON CFR (7499) |
| Torque AL [5d1d8d8c] | mtb | XS · S · M · L · XL | 624 · 634 · 643 · 652 · 656 | 420 · 445 · 470 · 495 · 520 | ≤–168 · 163–177 · 172–185 · 180–194 · 189–∞ | Torque AL 7 (2499); Torque AL 8 (2999); Torque AL 9 (3999) |
| Torque:ON CF [e8b6f9d3] | emtb | S · M · L · XL | 639 · 648 · 657 · 666 | 450 · 475 · 500 · 525 | ≤–177 · 172–185 · 180–194 · 189–∞ | Torque:ON CF 8 (4499); Torque:ON CF 9 (4499) |
| Ultimate CF SLX [8b2864bb] | carretera | 2XS · XS · S · M · L · XL · 2XL | 498 · 520 · 539 · 560 · 580 · 606 · 624 | 372 · 378 · 390 · 393 · 401 · 419 · 429 | ≤–166 · 166–172 · 172–178 · 178–184 · 184–190 · 190–196 · 196–∞ | Ultimate CF SLX 7 Di2 (4499); Ultimate CF SLX 8 AXS (5999); Ultimate CF SLX 8 Di2 (5499) |
| Ultimate CF [4198b95b] | carretera | 2XS · XS · S · M · L · XL · 2XL | 498 · 520 · 539 · 560 · 580 · 606 · 624 | 372 · 378 · 390 · 393 · 401 · 419 · 429 | ≤–166 · 166–172 · 172–178 · 178–184 · 184–190 · 190–196 · 196–∞ | Ultimate CF 7 (2799); Ultimate CF 7 AXS (3499); Ultimate CF 8 Di2 (3999) |
| Ultimate CFR Disc Frame and Brake Kit [ee53f30e] | carretera | 2XS · XS · S · M · L · XL · 2XL | 498 · 520 · 539 · 560 · 580 · 606 · 624 | 372 · 378 · 390 · 393 · 401 · 419 · 429 | ≤–166 · 166–172 · 172–178 · 178–184 · 184–190 · 190–196 · 196–∞ | Ultimate CFR Disc Frame and Brake Kit (3999) |
| Ultimate CFR [7f40e5ff] | carretera | 2XS · XS · S · M · L · XL · 2XL | 498 · 520 · 539 · 560 · 580 · 606 · 624 | 372 · 378 · 390 · 393 · 401 · 419 · 429 | ≤–166 · 166–172 · 172–178 · 178–184 · 184–190 · 190–196 · 196–∞ | Ultimate CFR AXS (7999); Ultimate CFR Di2 (7999) |

Descartados: fuera de alcance (URL/tipo): 42, excluido por nombre (cuadro, kit, junior…): 3

## Cube — con avisos

**Nota:** Sin altura: la talla solo se ofrece con un calculador (no se usa). Rechazos: reach publicado no creciente (Nuroad, Attain), por eso no queda gravel.

Diff con bikes.csv: **+376** tallas nuevas, **−0** que desaparecen, **~0** con cambios. Productos candidatos: 234. Métodos: html. Descargas: {'httpx': 0, 'browser': 0, 'cache': 240, 'challenges': 0}.

| Familia | Cat. | Tallas | Stack | Reach | Altura (cm) | Modelos (precio €) |
|---|---|---|---|---|---|---|
| Cube AMS Hybrid 177 C:62 [be184ff8] | emtb | S · M · L · XL | 631 · 631 · 636 · 654 | 427 · 452 · 477 · 507 | — · — · — · — | Cube AMS Hybrid 177 C:62 AT 600X (7499); Cube AMS Hybrid 177 C:62 Super TM 600X (9999); Cube AMS Hybrid 177 C:62 TM 600X (5799) |
| Cube AMS Hybrid ONE44 C:62 [53c1333e] | emtb | S · M · L · XL | 615 · 624 · 633 · 652 | 429 · 449 · 474 · 501 | — · — · — · — | Cube AMS Hybrid ONE44 C:62 Pro 400X (4199); Cube AMS Hybrid ONE44 C:62 Race 400X (4499) |
| Cube AMS Hybrid ONE44 C:68X [97afe5f2] | emtb | S · M · L · XL | 617 · 626 · 635 · 653 | 428 · 448 · 473 · 500 | — · — · — · — | Cube AMS Hybrid ONE44 C:68X SLT 400X (7999); Cube AMS Hybrid ONE44 C:68X SLX 400X (5999); Cube AMS Hybrid ONE44 C:68X TM 400X (6499) |
| Cube Agree C:62 [2dc1f593] | carretera | 47 cm · 50 cm · 53 cm · 56 cm · 58 cm · 60 cm · 62 cm | 513 · 523 · 544 · 572 · 591 · 606 · 628 | 376 · 378 · 383 · 391 · 394 · 399 · 402 | — · — · — · — · — · — · — | Cube Agree C:62 Pro (3299); Cube Agree C:62 Race (3699); Cube Agree C:62 SLX (3999) |
| Cube Agree C:62 [fb630f22] | carretera | 50 cm · 53 cm · 56 cm · 58 cm · 60 cm · 62 cm | 523 · 544 · 572 · 591 · 606 · 628 | 378 · 383 · 391 · 394 · 399 · 402 | — · — · — · — · — · — | Cube Agree C:62 EX (2999); Cube Agree C:62 ONE (2799); Cube Agree C:62 SLT AXS (5299); Cube Agree C:62 SLT Di2 (4999) |
| Cube Aim [ec9dead2] | mtb | XS · S · M · L · XL | 602 · 619 · 641 · 655 · 678 | 384 · 398 · 414 · 431 · 446 | — · — · — · — · — | Cube Aim ONE (499); Cube Aim ONE FE (599); Cube Aim Pro (599); Cube Aim Pro FE (699); Cube Aim SLT (799); Cube Aim SLX (699); Cube Aim SLX FE (799) |
| Cube FRITZZ C:62 [acc58039] | mtb | S · M · L · XL | 628 · 628 · 629 · 647 | 426 · 452 · 476 · 496 | — · — · — · — | Cube FRITZZ C:62 Super TM (4999); Cube FRITZZ C:62 TM (2999) |
| Cube Litening AERO C:68X [40edd974] | carretera | 50 cm · 52 cm · 54 cm · 56 cm · 58 cm · 60 cm · 62 cm | 514 · 524 · 542 · 563 · 580 · 594 · 609 | 389 · 389 · 389 · 398 · 403 · 405 · 412 | — · — · — · — · — · — · — | Cube Litening AERO C:68X Orbit (6999); Cube Litening AERO C:68X Pro (4999); Cube Litening AERO C:68X Race (4999); Cube Litening AERO C:68X SLT (7299); Cube Litening AERO C:68X SLX (7299) |
| Cube Litening AIR C:68X [c10592c6] | carretera | 50 cm · 52 cm · 54 cm · 56 cm · 58 cm · 60 cm | 514 · 524 · 542 · 563 · 580 · 594 | 389 · 389 · 390 · 398 · 403 · 405 | — · — · — · — · — · — | Cube Litening AIR C:68X Pro (4999); Cube Litening AIR C:68X Race (5299); Cube Litening AIR C:68X SLT (7499); Cube Litening AIR C:68X SLX (7499) |
| Cube Reaction C:62 ONE [eb2937c5] | mtb | XS · S · M · L · XL · XXL | 600 · 612 · 621 · 630 · 639 · 653 | 385 · 405 · 422 · 439 · 456 · 472 | — · — · — · — · — · — | Cube Reaction C:62 ONE (1499) |
| Cube Reaction C:62 [16061129] | mtb | S · M · L · XL · XXL | 612 · 621 · 630 · 639 · 653 | 405 · 422 · 439 · 456 · 472 | — · — · — · — · — | Cube Reaction C:62 Pro (1999); Cube Reaction C:62 Race (2799) |
| Cube Reaction C:68X SLX [d8af8984] | mtb | S · M · L · XL | 607 · 610 · 622 · 637 | 412 · 436 · 457 · 483 | — · — · — · — | Cube Reaction C:68X SLX (3499) |
| Cube Reaction Hybrid [f34b1363] | emtb | S · M · L · XL · XXL | 646 · 653 · 662 · 674 · 685 | 409 · 420 · 437 · 455 · 471 | — · — · — · — · — | Cube Reaction Hybrid ONE 720 (2799); Cube Reaction Hybrid ONE 720 FE (2999); Cube Reaction Hybrid Performance 720 (2499); Cube Reaction Hybrid Performance 720 FE (2699); Cube Reaction Hybrid Pro 800 (3199); Cube Reaction Hybrid Pro 800 FE (3399); Cube Reaction Hybrid Race 800 (3699); Cube Reaction Hybrid Race 800 FE (3899); Cube Reaction Hybrid SLT 800 (4799); Cube Reaction Hybrid SLX 800 (4199); Cube Reaction Hybrid SLX 800 FE (4399) |
| Cube Reaction TM [1d8616f3] | mtb | XS · S · M · L · XL | 605 · 605 · 635 · 635 · 644 | 404 · 424 · 442 · 462 · 482 | — · — · — · — · — | Cube Reaction TM ONE (1099); Cube Reaction TM Pro (1699) |
| Cube Reaction [b5582c5d] | mtb | XS · S · M · L · XL | 601 · 616 · 630 · 644 · 658 | 383 · 400 · 417 · 434 · 452 | — · — · — · — · — | Cube Reaction Pro (999); Cube Reaction SLX (1299) |
| Cube Stereo C:62 [4dd258eb] | mtb | S · M · L · XL | 619 · 625 · 634 · 652 | 430 · 455 · 480 · 505 | — · — · — · — | Cube Stereo C:62 SLT (5499); Cube Stereo C:62 Super TM (4999) |
| Cube Stereo Hybrid ONE22 [34593e3a] | emtb | S · M · L · XL | 638 · 647 · 656 · 670 | 417 · 444 · 471 · 496 | — · — · — · — | Cube Stereo Hybrid ONE22 Pro 800 (3699); Cube Stereo Hybrid ONE22 Pro 800 FE (3899); Cube Stereo Hybrid ONE22 SLX 800 (4199); Cube Stereo Hybrid ONE22 SLX 800 FE (4399) |
| Cube Stereo Hybrid ONE44 HPC [9715755c] | emtb | S · M · L · XL | 606 · 621 · 634 · 660 | 425 · 450 · 475 · 510 | — · — · — · — | Cube Stereo Hybrid ONE44 HPC EXC 800 (4799); Cube Stereo Hybrid ONE44 HPC Super TM 800 (6999) |
| Cube Stereo Hybrid ONE44 HPC [a143eb9c] | emtb | S · M · L · XL | 604 · 620 · 632 · 658 | 427 · 452 · 477 · 512 | — · — · — · — | Cube Stereo Hybrid ONE44 HPC AT 800 (6999); Cube Stereo Hybrid ONE44 HPC Pro 800 (4099); Cube Stereo Hybrid ONE44 HPC Race 800 (4399); Cube Stereo Hybrid ONE44 HPC SLT 800 (8499); Cube Stereo Hybrid ONE44 HPC SLX 800 (4999); Cube Stereo Hybrid ONE44 HPC SLX Evo 800 (5699); Cube Stereo Hybrid ONE44 HPC TM 800 (5999) |
| Cube Stereo Hybrid ONE44 [22e3adaa] | emtb | S · M · L · XL | 622 · 631 · 640 · 660 | 420 · 447 · 474 · 510 | — · — · — · — | Cube Stereo Hybrid ONE44 Pro 800 (3899); Cube Stereo Hybrid ONE44 Pro 800 FE (4099); Cube Stereo Hybrid ONE44 SLX 800 (4699); Cube Stereo Hybrid ONE44 SLX 800 FE (4899) |
| Cube Stereo Hybrid ONE77 HPC [d10a4b65] | emtb | S · M · L · XL | 635 · 635 · 645 · 659 | 427 · 452 · 477 · 506 | — · — · — · — | Cube Stereo Hybrid ONE77 HPC AT 800 (7199); Cube Stereo Hybrid ONE77 HPC Race 800 (4399); Cube Stereo Hybrid ONE77 HPC SLT 800 (8699); Cube Stereo Hybrid ONE77 HPC SLX 800 (4999); Cube Stereo Hybrid ONE77 HPC TM 800 (6199) |
| Cube TWO15 [374456a2] | mtb | M · L · XL | 655 · 655 · 655 | 447 · 467 · 486 | — · — · — | Cube TWO15 Race (2999); Cube TWO15 SLX (3999) |

<details><summary>Tallas rechazadas por la validación</summary>

- Cube Attain C:62 SLT 47 cm: reach decrece al subir de talla (62 cm: 391 < 392)
- Cube Attain C:62 SLT 50 cm: reach decrece al subir de talla (62 cm: 391 < 392)
- Cube Attain C:62 SLT 53 cm: reach decrece al subir de talla (62 cm: 391 < 392)
- Cube Attain C:62 SLT 56 cm: reach decrece al subir de talla (62 cm: 391 < 392)
- Cube Attain C:62 SLT 58 cm: reach decrece al subir de talla (62 cm: 391 < 392)
- Cube Attain C:62 SLT 60 cm: reach decrece al subir de talla (62 cm: 391 < 392)
- Cube Attain C:62 SLT 62 cm: reach decrece al subir de talla (62 cm: 391 < 392)
- Cube Attain C:62 SLX 47 cm: reach decrece al subir de talla (62 cm: 391 < 392)
- Cube Attain C:62 SLX 50 cm: reach decrece al subir de talla (62 cm: 391 < 392)
- Cube Attain C:62 SLX 53 cm: reach decrece al subir de talla (62 cm: 391 < 392)
- Cube Attain C:62 SLX 56 cm: reach decrece al subir de talla (62 cm: 391 < 392)
- Cube Attain C:62 SLX 58 cm: reach decrece al subir de talla (62 cm: 391 < 392)
- Cube Attain C:62 SLX 60 cm: reach decrece al subir de talla (62 cm: 391 < 392)
- Cube Attain C:62 SLX 62 cm: reach decrece al subir de talla (62 cm: 391 < 392)
- Cube Attain C:62 Race 47 cm: reach decrece al subir de talla (62 cm: 391 < 392)
- Cube Attain C:62 Race 50 cm: reach decrece al subir de talla (62 cm: 391 < 392)
- Cube Attain C:62 Race 53 cm: reach decrece al subir de talla (62 cm: 391 < 392)
- Cube Attain C:62 Race 56 cm: reach decrece al subir de talla (62 cm: 391 < 392)
- Cube Attain C:62 Race 58 cm: reach decrece al subir de talla (62 cm: 391 < 392)
- Cube Attain C:62 Race 60 cm: reach decrece al subir de talla (62 cm: 391 < 392)
- Cube Attain C:62 Race 62 cm: reach decrece al subir de talla (62 cm: 391 < 392)
- Cube Attain SLX 47 cm: reach decrece al subir de talla (62 cm: 393 < 396)
- Cube Attain SLX 50 cm: reach decrece al subir de talla (62 cm: 393 < 396)
- Cube Attain SLX 53 cm: reach decrece al subir de talla (62 cm: 393 < 396)
- Cube Attain SLX 56 cm: reach decrece al subir de talla (62 cm: 393 < 396)
- Cube Attain SLX 58 cm: reach decrece al subir de talla (62 cm: 393 < 396)
- Cube Attain SLX 60 cm: reach decrece al subir de talla (62 cm: 393 < 396)
- Cube Attain SLX 62 cm: reach decrece al subir de talla (62 cm: 393 < 396)
- Cube Attain Race 47 cm: reach decrece al subir de talla (62 cm: 393 < 396)
- Cube Attain Race 50 cm: reach decrece al subir de talla (62 cm: 393 < 396)
- Cube Attain Race 53 cm: reach decrece al subir de talla (62 cm: 393 < 396)
- Cube Attain Race 56 cm: reach decrece al subir de talla (62 cm: 393 < 396)
- Cube Attain Race 58 cm: reach decrece al subir de talla (62 cm: 393 < 396)
- Cube Attain Race 60 cm: reach decrece al subir de talla (62 cm: 393 < 396)
- Cube Attain Race 62 cm: reach decrece al subir de talla (62 cm: 393 < 396)
- Cube Attain Pro 47 cm: reach decrece al subir de talla (62 cm: 393 < 396)
- Cube Attain Pro 50 cm: reach decrece al subir de talla (62 cm: 393 < 396)
- Cube Attain Pro 53 cm: reach decrece al subir de talla (62 cm: 393 < 396)
- Cube Attain Pro 56 cm: reach decrece al subir de talla (62 cm: 393 < 396)
- Cube Attain Pro 58 cm: reach decrece al subir de talla (62 cm: 393 < 396)
- Cube Attain Pro 60 cm: reach decrece al subir de talla (62 cm: 393 < 396)
- Cube Attain Pro 62 cm: reach decrece al subir de talla (62 cm: 393 < 396)
- Cube Nuroad C:62 SLT XS: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 SLT S: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 SLT M: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 SLT L: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 SLT XL: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 SLX XS: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 SLX S: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 SLX M: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 SLX L: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 SLX XL: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 Race XS: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 Race S: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 Race M: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 Race L: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 Race XL: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 EXC XS: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 EXC S: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 EXC M: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 EXC L: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 EXC XL: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 EX XS: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 EX S: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 EX M: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 EX L: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 EX XL: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 Pro FE XS: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 Pro FE S: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 Pro FE M: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 Pro FE L: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 Pro FE XL: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 Pro XS: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 Pro S: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 Pro M: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 Pro L: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 Pro XL: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 ONE XS: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 ONE S: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 ONE M: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 ONE L: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad C:62 ONE XL: reach decrece al subir de talla (L: 392 < 393)
- Cube Nuroad SLX XS: reach decrece al subir de talla (L: 389 < 390)
- Cube Nuroad SLX S: reach decrece al subir de talla (L: 389 < 390)
- Cube Nuroad SLX M: reach decrece al subir de talla (L: 389 < 390)
- Cube Nuroad SLX L: reach decrece al subir de talla (L: 389 < 390)
- Cube Nuroad SLX XL: reach decrece al subir de talla (L: 389 < 390)
- Cube Nuroad SLX XXL: reach decrece al subir de talla (L: 389 < 390)
- Cube Nuroad Race FE XS: reach decrece al subir de talla (L: 389 < 390)
- Cube Nuroad Race FE S: reach decrece al subir de talla (L: 389 < 390)
- Cube Nuroad Race FE M: reach decrece al subir de talla (L: 389 < 390)
- Cube Nuroad Race FE L: reach decrece al subir de talla (L: 389 < 390)
- Cube Nuroad Race FE XL: reach decrece al subir de talla (L: 389 < 390)
- Cube Nuroad Race FE XXL: reach decrece al subir de talla (L: 389 < 390)
- Cube Nuroad Race XS: reach decrece al subir de talla (L: 389 < 390)
- Cube Nuroad Race S: reach decrece al subir de talla (L: 389 < 390)
- Cube Nuroad Race M: reach decrece al subir de talla (L: 389 < 390)
- Cube Nuroad Race L: reach decrece al subir de talla (L: 389 < 390)
- Cube Nuroad Race XL: reach decrece al subir de talla (L: 389 < 390)
- Cube Nuroad Race XXL: reach decrece al subir de talla (L: 389 < 390)
- Cube Nuroad Pro FE XS: reach decrece al subir de talla (L: 389 < 390)
- Cube Nuroad Pro FE S: reach decrece al subir de talla (L: 389 < 390)
- Cube Nuroad Pro FE M: reach decrece al subir de talla (L: 389 < 390)
- Cube Nuroad Pro FE L: reach decrece al subir de talla (L: 389 < 390)
- Cube Nuroad Pro FE XL: reach decrece al subir de talla (L: 389 < 390)
- Cube Nuroad Pro FE XXL: reach decrece al subir de talla (L: 389 < 390)
- Cube Nuroad EX XXS: reach decrece al subir de talla (L: 389 < 390)
- Cube Nuroad EX XS: reach decrece al subir de talla (L: 389 < 390)
- Cube Nuroad EX S: reach decrece al subir de talla (L: 389 < 390)
- Cube Nuroad EX M: reach decrece al subir de talla (L: 389 < 390)
- Cube Nuroad EX L: reach decrece al subir de talla (L: 389 < 390)
- Cube Nuroad EX XL: reach decrece al subir de talla (L: 389 < 390)
- Cube Nuroad EX XXL: reach decrece al subir de talla (L: 389 < 390)
- Cube Nuroad Pro XXS: reach decrece al subir de talla (L: 389 < 390)
- Cube Nuroad Pro XS: reach decrece al subir de talla (L: 389 < 390)
- Cube Nuroad Pro S: reach decrece al subir de talla (L: 389 < 390)
- Cube Nuroad Pro M: reach decrece al subir de talla (L: 389 < 390)
- Cube Nuroad Pro L: reach decrece al subir de talla (L: 389 < 390)
- Cube Nuroad Pro XL: reach decrece al subir de talla (L: 389 < 390)
- Cube Nuroad Pro XXL: reach decrece al subir de talla (L: 389 < 390)
- Cube Nuroad ONE FE XS: reach decrece al subir de talla (L: 386 < 387)
- Cube Nuroad ONE FE S: reach decrece al subir de talla (L: 386 < 387)
- Cube Nuroad ONE FE M: reach decrece al subir de talla (L: 386 < 387)
- Cube Nuroad ONE FE L: reach decrece al subir de talla (L: 386 < 387)
- Cube Nuroad ONE FE XL: reach decrece al subir de talla (L: 386 < 387)
- Cube Nuroad ONE XXS: reach decrece al subir de talla (L: 386 < 387)
- Cube Nuroad ONE XS: reach decrece al subir de talla (L: 386 < 387)
- Cube Nuroad ONE S: reach decrece al subir de talla (L: 386 < 387)
- Cube Nuroad ONE M: reach decrece al subir de talla (L: 386 < 387)
- Cube Nuroad ONE L: reach decrece al subir de talla (L: 386 < 387)
- Cube Nuroad ONE XL: reach decrece al subir de talla (L: 386 < 387)
- Cube Stereo HPC TM S: stack decrece al subir de talla (L: 366 < 627)
- Cube Stereo HPC TM M: stack decrece al subir de talla (L: 366 < 627)
- Cube Stereo HPC TM L: stack=366 fuera del rango plausible [480, 780]; stack decrece al subir de talla (L: 366 < 627)
- Cube Stereo HPC TM XL: stack decrece al subir de talla (L: 366 < 627)
- Cube Stereo HPC RACE S: stack decrece al subir de talla (L: 366 < 627)
- Cube Stereo HPC RACE M: stack decrece al subir de talla (L: 366 < 627)
- Cube Stereo HPC RACE L: stack=366 fuera del rango plausible [480, 780]; stack decrece al subir de talla (L: 366 < 627)
- Cube Stereo HPC RACE XL: stack decrece al subir de talla (L: 366 < 627)

</details>

<details><summary>Avisos</summary>

- Cube Reaction C:68X SLX: 'Stack' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube Reaction C:68X SLX: 'Reach' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube Stereo C:62 SLT: 'Stack' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube Stereo C:62 SLT: 'Reach' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube FRITZZ C:62 Super TM: 'Stack' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube FRITZZ C:62 Super TM: 'Reach' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube Stereo C:62 Super TM: 'Stack' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube Stereo C:62 Super TM: 'Reach' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube TWO15 SLX: 'Stack' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube TWO15 SLX: 'Reach' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube FRITZZ C:62 TM: 'Stack' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube FRITZZ C:62 TM: 'Reach' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube Stereo HPC TM: 'Reach' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube TWO15 Race: 'Stack' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube TWO15 Race: 'Reach' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube Stereo HPC RACE: 'Reach' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube AMS Hybrid 177 C:62 Super TM 600X: 'Stack' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube AMS Hybrid 177 C:62 Super TM 600X: 'Reach' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube Stereo Hybrid ONE77 HPC SLT 800: 'Stack' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube Stereo Hybrid ONE77 HPC SLT 800: 'Reach' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube Stereo Hybrid ONE44 HPC SLT 800: 'Stack' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube Stereo Hybrid ONE44 HPC SLT 800: 'Reach' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube AMS Hybrid 177 C:62 AT 600X: 'Stack' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube AMS Hybrid 177 C:62 AT 600X: 'Reach' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube Stereo Hybrid ONE77 HPC AT 800: 'Stack' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube Stereo Hybrid ONE77 HPC AT 800: 'Reach' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube Stereo Hybrid ONE44 HPC AT 800: 'Stack' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube Stereo Hybrid ONE44 HPC AT 800: 'Reach' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube Stereo Hybrid ONE77 HPC TM 800: 'Stack' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube Stereo Hybrid ONE77 HPC TM 800: 'Reach' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube Stereo Hybrid ONE44 HPC TM 800: 'Stack' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube Stereo Hybrid ONE44 HPC TM 800: 'Reach' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube AMS Hybrid 177 C:62 TM 600X: 'Stack' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube AMS Hybrid 177 C:62 TM 600X: 'Reach' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube Stereo Hybrid ONE44 HPC SLX Evo 800: 'Stack' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube Stereo Hybrid ONE44 HPC SLX Evo 800: 'Reach' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube Stereo Hybrid ONE44 HPC SLX 800: 'Stack' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube Stereo Hybrid ONE44 HPC SLX 800: 'Reach' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube Stereo Hybrid ONE77 HPC SLX 800: 'Stack' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube Stereo Hybrid ONE77 HPC SLX 800: 'Reach' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube AMS Hybrid ONE44 C:62 Race 400X: 'Stack' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube AMS Hybrid ONE44 C:62 Race 400X: 'Reach' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube Stereo Hybrid ONE44 HPC Race 800: 'Stack' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube Stereo Hybrid ONE44 HPC Race 800: 'Reach' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube Stereo Hybrid ONE77 HPC Race 800: 'Stack' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube Stereo Hybrid ONE77 HPC Race 800: 'Reach' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube AMS Hybrid ONE44 C:62 Pro 400X: 'Stack' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube AMS Hybrid ONE44 C:62 Pro 400X: 'Reach' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube Stereo Hybrid ONE44 HPC Pro 800: 'Stack' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Cube Stereo Hybrid ONE44 HPC Pro 800: 'Reach' publica dos posiciones (p. ej. Hi/Lo): se usa la primera

</details>

Descartados: duplicado (mismo modelo): 132

## Bianchi — con avisos

**Nota:** Stack/Reach leídos de las filas Y/X de la tabla según el dibujo oficial de cotas (aprobado por el usuario). Tienda italiana en EUR; sin año de modelo.

Diff con bikes.csv: **+179** tallas nuevas, **−0** que desaparecen, **~0** con cambios. Productos candidatos: 81. Métodos: html. Descargas: {'httpx': 0, 'browser': 0, 'cache': 82, 'challenges': 0}.

| Familia | Cat. | Tallas | Stack | Reach | Altura (cm) | Modelos (precio €) |
|---|---|---|---|---|---|---|
| Arcadex [277fc338] | gravel | XS · SM · MD · LG · XL | 537 · 556 · 576 · 597 · 616 | 389 · 396 · 404 · 413 · 423 | — · — · — · — · — | Arcadex AL (1950); Arcadex ALU (1640) |
| Arcadex [a6b2e71b] | gravel | XS · SM · MD · LG · XL | 544 · 563 · 584 · 610 · 638 | 376 · 383 · 391 · 402 · 410 | — · — · — · — · — | Arcadex COMP (2850+); Arcadex PRO (4690) |
| E-Vertic FX Type [e04abcc6] | emtb | S · M · L · XL | 623 · 623 · 632 · 645 | 445 · 467 · 490 · 510 | — · — · — · — | E-Vertic FX Type (5690); E-Vertic FX Type - Bianchi (s/p) |
| Impulso [30890840] | gravel | XS · SM · MD · LG · XL | 517 · 534 · 554 · 580 · 608 | 376 · 378 · 391 · 401 · 414 | — · — · — · — · — | Impulso COMP (2290); Impulso PRO (3900); Impulso RC (6490) |
| Infinito PRO Paris-Roubaix [127527ea] | carretera | 530 · 550 · 570 | 566 · 584 · 600 | 373 · 377 · 382 | — · — · — | Infinito PRO Paris-Roubaix (7990) |
| Infinito [f081fe6e] | carretera | 470 · 500 · 530 · 550 · 570 · 590 · 610 | 531 · 552 · 566 · 584 · 600 · 614.5 · 629 | 370 · 372 · 373 · 377 · 382 · 384 · 387 | — · — · — · — · — · — · — | Infinito (2750); Infinito PRO (4950); Infinito PRO Launch Edition (7690) |
| Magma 29S [1598c5ff] | mtb | 38 · 43 · 48 · 53 | 632 · 632 · 642 · 651 | 389 · 403 · 425 · 442 | — · — · — · — | Magma 29S (820) |
| Nitron [d7f659cb] | mtb | SM · MD · LG · XL | 601 · 611 · 620 · 629 | 397 · 424 · 447 · 464 | — · — · — · — | Nitron (1700) |
| Oltre [2d2024fa] | carretera | 470 · 500 · 530 · 550 · 570 · 590 | 470 · 478 · 504 · 520 · 536 · 555 | 385 · 392 · 393 · 397 · 402 · 406 | — · — · — · — · — · — | Oltre COMP (4690); Oltre Comp - NEW (6290); Oltre PRO (7850); Oltre PRO Team Replica (8390); Oltre Pro - NEW (8000); Oltre RC (12290); Oltre RC - NEW (12600); Oltre RC - Team Replica 2026 - Bianchi (s/p); Oltre RC Founder Edition (21885) |
| Specialissima [002677d1] | carretera | 470 · 500 · 530 · 550 · 570 · 590 | 486 · 494 · 520 · 536 · 552 · 571 | 379 · 386 · 387 · 391 · 397 · 400 | — · — · — · — · — · — | Specialissima (6150); Specialissima PRO (7700); Specialissima RC (11290); Specialissima RC Tour de France (12900) |
| Sprint ICR [469bb5a2] | carretera | 470 · 500 · 530 · 550 · 570 · 590 · 610 | 497 · 505 · 529 · 545 · 561 · 580 · 599 | 377 · 383 · 384 · 388 · 393 · 396 · 397 | — · — · — · — · — · — · — | Sprint ICR (s/p) |
| T-Tronik X [4ba5b67d] | emtb | S · M · L · XL | 634 · 648 · 661 · 675 | 415 · 435 · 455 · 475 | — · — · — · — | T-Tronik X 9.1 (3790); T-Tronik X 9.2 (3190); T-Tronik X 9.2 TRK (3390) |
| Via Nirone 7 [94e6ddc6] | gravel | 470 · 500 · 530 · 550 · 570 · 590 · 610 | 527 · 541 · 556 · 570 · 591 · 612 · 634 | 375 · 380 · 386 · 392 · 400 · 409 · 416 | — · — · — · — · — · — · — | Via Nirone 7 (1390) |

<details><summary>Tallas rechazadas por la validación</summary>

- Specialissima COMP 470: reach decrece al subir de talla (530: 386 < 387)
- Specialissima COMP 500: reach decrece al subir de talla (530: 386 < 387)
- Specialissima COMP 530: reach decrece al subir de talla (530: 386 < 387)
- Specialissima COMP 550: reach decrece al subir de talla (530: 386 < 387)
- Specialissima COMP 570: reach decrece al subir de talla (530: 386 < 387)
- Specialissima COMP 590: reach decrece al subir de talla (530: 386 < 387)
- Specialissima PRO 470: reach decrece al subir de talla (530: 386 < 387)
- Specialissima PRO 500: reach decrece al subir de talla (530: 386 < 387)
- Specialissima PRO 530: reach decrece al subir de talla (530: 386 < 387)
- Specialissima PRO 550: reach decrece al subir de talla (530: 386 < 387)
- Specialissima PRO 570: reach decrece al subir de talla (530: 386 < 387)
- Specialissima PRO 590: reach decrece al subir de talla (530: 386 < 387)
- Specialissima RC 470: reach decrece al subir de talla (530: 386 < 387)
- Specialissima RC 500: reach decrece al subir de talla (530: 386 < 387)
- Specialissima RC 530: reach decrece al subir de talla (530: 386 < 387)
- Specialissima RC 550: reach decrece al subir de talla (530: 386 < 387)
- Specialissima RC 570: reach decrece al subir de talla (530: 386 < 387)
- Specialissima RC 590: reach decrece al subir de talla (530: 386 < 387)
- Specialissima RC Founder Edition 470: reach decrece al subir de talla (530: 386 < 387)
- Specialissima RC Founder Edition 500: reach decrece al subir de talla (530: 386 < 387)
- Specialissima RC Founder Edition 530: reach decrece al subir de talla (530: 386 < 387)
- Specialissima RC Founder Edition 550: reach decrece al subir de talla (530: 386 < 387)
- Specialissima RC Founder Edition 570: reach decrece al subir de talla (530: 386 < 387)
- Specialissima RC Founder Edition 590: reach decrece al subir de talla (530: 386 < 387)
- Specialissima RC Pantani 470: reach decrece al subir de talla (530: 386 < 387)
- Specialissima RC Pantani 500: reach decrece al subir de talla (530: 386 < 387)
- Specialissima RC Pantani 530: reach decrece al subir de talla (530: 386 < 387)
- Specialissima RC Pantani 550: reach decrece al subir de talla (530: 386 < 387)
- Specialissima RC Pantani 570: reach decrece al subir de talla (530: 386 < 387)
- Specialissima RC Pantani 590: reach decrece al subir de talla (530: 386 < 387)
- Oltre RACE 440: reach decrece al subir de talla (530: 385 < 387)
- Oltre RACE 470: reach decrece al subir de talla (530: 385 < 387)
- Oltre RACE 500: reach decrece al subir de talla (530: 385 < 387)
- Oltre RACE 530: reach decrece al subir de talla (530: 385 < 387)
- Oltre RACE 550: reach decrece al subir de talla (530: 385 < 387)
- Oltre RACE 570: reach decrece al subir de talla (530: 385 < 387)
- Oltre RACE 590: reach decrece al subir de talla (530: 385 < 387)
- Oltre RACE 610: reach decrece al subir de talla (530: 385 < 387)

</details>

Descartados: excluido por nombre (cuadro, kit, junior…): 8, duplicado (mismo modelo): 34

## Cannondale — con avisos

**Nota:** Geometría por visión (28 tablas en data/vision/cannondale/), publicada en cm.

Diff con bikes.csv: **+433** tallas nuevas, **−0** que desaparecen, **~0** con cambios. Productos candidatos: 111. Métodos: vision. Descargas: {'httpx': 0, 'browser': 0, 'cache': 114, 'challenges': 0}.

| Familia | Cat. | Tallas | Stack | Reach | Altura (cm) | Modelos (precio €) |
|---|---|---|---|---|---|---|
| Bad Habit [f49137c6] | mtb | SM · MD · LG · XL | 630 · 641 · 648 · 657 | 430 · 455 · 480 · 515 | — · — · — · — | Bad Habit 1 (7999); Bad Habit 2 (4999) |
| CAAD Optimo 3 [f3151dde] | carretera | 44.0 · 48.0 · 51.0 · 54.0 · 56.0 · 58.0 | 505 · 520 · 535 · 555 · 575 · 595 | 370 · 374 · 377 · 384 · 390 · 395 | — · — · — · — · — · — | CAAD Optimo 3 (1099) |
| CAAD14 [f9a5afaf] | carretera | 48.0 · 51.0 · 54.0 · 56.0 · 58.0 · 61.0 | 505 · 520 · 540 · 560 · 580 · 610 | 377 · 381 · 386 · 392 · 398 · 407 | — · — · — · — · — · — | CAAD14 1 (7499); CAAD14 2 (3799); CAAD14 3 (2499) |
| Habit 3 [d813a6a7] | mtb | XS · SM · MD · LG · XL | 575 · 623 · 632 · 641 · 650 | 405 · 430 · 455 · 480 · 515 | — · — · — · — · — | Habit 3 (3699) |
| Habit Carbon LT 1 [4e32bde9] | mtb | XS · SM · MD · LG · XL | 578 · 626 · 635 · 644 · 653 | 400 · 425 · 450 · 475 · 510 | — · — · — · — · — | Habit Carbon LT 1 (5899) |
| Habit HT [88199a4d] | mtb | SM · MD · LG · XL | 634 · 643 · 653 · 662 | 415 · 440 · 465 · 500 | — · — · — · — | Habit HT 1 (1549); Habit HT 2 (1149) |
| Habit Neo [5296671b] | emtb | SM · MD · LG · XL | 629 · 638 · 647 · 656 | 430 · 455 · 480 · 515 | — · — · — · — | Habit Neo 1 (12499); Habit Neo 2 (8999); Habit Neo 3 (6999) |
| Habit [77f12bdf] | mtb | XS · SM · MD · LG · XL | 575 · 623 · 632 · 641 · 650 | 405 · 430 · 455 · 480 · 515 | — · — · — · — · — | Habit Carbon 1 AXS (6499); Habit Carbon 2 (4499); Habit LTD (8499) |
| Moterra EQ [36d88430] | emtb | SM · MD · LG · XL | 631 · 631 · 639 · 648 | 428 · 453 · 478 · 513 | — · — · — · — | Moterra EQ (4999) |
| Moterra LT 1 [90a8f475] | emtb | SM · MD · LG · XL | 647 · 647 · 656 · 665 | 425 · 450 · 475 · 510 | — · — · — · — | Moterra LT 1 (7399) |
| Moterra SL [6b0fafcc] | emtb | SM · MD · LG · XL | 630 · 639 · 648 · 657 | 420 · 445 · 470 · 505 | — · — · — · — | Moterra SL 1 (8499); Moterra SL 2 (6499); Moterra SL LAB71 (13999) |
| Moterra [7e9bb525] | emtb | SM · MD · LG · XL | 644 · 644 · 653 · 661 | 430 · 455 · 480 · 515 | — · — · — · — | Moterra 1 (8999); Moterra 2 (6999) |
| Moterra [a696fbd3] | emtb | SM · MD · LG · XL | 641 · 641 · 649 · 658 | 434 · 459 · 484 · 519 | — · — · — · — | Moterra 3 (4799); Moterra 4 (3999); Moterra 4+ (4299) |
| Scalpel HT [d87b15e1] | mtb | SM · MD · LG · XL | 607 · 617 · 629 · 641 | 404 · 423 · 444 · 465 | — · — · — · — | Scalpel HT Carbon 1 (3299); Scalpel HT Carbon 2 (2499); Scalpel HT Carbon 3 (1799); Scalpel HT LAB71 (10499) |
| Scalpel [4af8f262] | mtb | SM · MD · LG · XL | 597 · 597 · 607 · 616 | 425 · 450 · 475 · 510 | — · — · — · — | Scalpel 3 (3999); Scalpel 4 (3699) |
| Scalpel [b0e88e68] | mtb | SM · MD · LG · XL | 595 · 595 · 604 · 613 | 425 · 450 · 475 · 510 | — · — · — · — | Scalpel 1 Lefty (7999); Scalpel 2 Lefty (5999); Scalpel LAB71 Team (11999) |
| SuperSix EVO 6 [991f9634] | carretera | 44 · 48 · 51 · 54 · 56 · 58 · 61 | 505 · 520 · 535 · 555 · 575 · 595 · 625 | 370 · 374 · 378 · 384 · 389 · 395 · 403 | — · — · — · — · — · — · — | SuperSix EVO 6 (2799) |
| SuperSix EVO [7388323f] | carretera | 44 · 48 · 50 · 52 · 54 · 56 · 58 · 61 | 495 · 508 · 520 · 532 · 545 · 565 · 585 · 615 | 373 · 376 · 379 · 383 · 387 · 393 · 398 · 406 | — · — · — · — · — · — · — · — | SuperSix EVO 1 (8499); SuperSix EVO 1 SL (7999); SuperSix EVO 2 (6299); SuperSix EVO 3 (6499); SuperSix EVO 4 (4999); SuperSix EVO 5 (4499); SuperSix EVO LAB71 (11999); SuperSix EVO LAB71 SL (12799) |
| SuperX [e1056b9e] | gravel | 46 · 51 · 54 · 56 · 58 · 61 | 515 · 535 · 555 · 575 · 595 · 615 | 365 · 371 · 378 · 385 · 392 · 398 | — · — · — · — · — · — | SuperX 1 (6999); SuperX 2 (6499); SuperX 3 (4999); SuperX 4 AXS (3799); SuperX LAB71 (12499) |
| Synapse Carbon 2 RLE [cf3f2efd] | carretera | 48.0 · 51.0 · 54.0 · 56.0 · 58.0 · 61.0 | 530 · 550 · 570 · 590 · 610 · 640 | 371 · 376 · 381 · 387 · 393 · 402 | — · — · — · — · — · — | Synapse Carbon 2 RLE (5899) |
| Synapse [eb2984eb] | carretera | 44.0 · 48.0 · 51.0 · 54.0 · 56.0 · 58.0 · 61.0 | 510 · 530 · 550 · 570 · 590 · 610 · 640 | 366 · 371 · 376 · 381 · 387 · 393 · 402 | — · — · — · — · — · — · — | Synapse Carbon 1 (6999); Synapse Carbon 2 (5899); Synapse Carbon 2 SmartSense (6499); Synapse Carbon 3 SmartSense (4499); Synapse Carbon 4 (3499); Synapse Carbon 5 (2699); Synapse LAB71 SmartSense (15799) |
| Topstone Carbon 1 RLE [3dc543d0] | gravel | XS · SM · MD · LG · XL | 534 · 551 · 574 · 600 · 624 | 371 · 377 · 383 · 390 · 397 | — · — · — · — · — | Topstone Carbon 1 RLE (7799) |
| Topstone Carbon [38c62a9b] | gravel | XS · SM · MD · LG · XL | 539 · 555 · 579 · 605 · 629 | 361 · 367 · 373 · 379 · 386 | — · — · — · — · — | Topstone Carbon 1 Lefty (7799); Topstone Carbon 2 Lefty (4899) |
| Topstone Carbon [a727119d] | gravel | 47.0 · 51.0 · 54.0 · 56.0 · 58.0 · 61.0 | 554 · 561 · 579 · 597 · 615 · 646 | 364 · 373 · 378 · 383 · 389 · 397 | — · — · — · — · — · — | Topstone Carbon 1 AXS (4999); Topstone Carbon 1 Lefty AXS (5999); Topstone Carbon 2 AXS - 1x (3699); Topstone Carbon 2 AXS SmartSense (3999); Topstone Carbon 2 GRX - 2x (3699); Topstone Carbon 3 GRX - 1x (2999); Topstone Carbon 3 GRX - 2x (2999); Topstone Carbon 4 CUES 1x (2699); Topstone Carbon LTD Di2 (6499); Topstone Carbon LTD Lefty AXS (7999) |
| Topstone [ebd3204e] | gravel | XS · SM · MD · LG · XL | 518 · 549 · 579 · 610 · 640 | 368 · 377 · 385 · 394 · 402 | — · — · — · — · — | Topstone 1 (2399); Topstone 2 CUES - 1x (1999); Topstone 2 GRX - 2x (1999); Topstone 3 (1499); Topstone EQ (2299) |
| Trail Neo 2 [02afa16b] | emtb | SM · MD · LG · XL | 622 · 635 · 644 · 658 | 401 · 417 · 433 · 450 | — · — · — · — | Trail Neo 2 (4299) |
| Trail [458f2646] | mtb | XS (27.5") · SM (27.5") · MD (29") · LG (29") · XL (29") | 573 · 591 · 623 · 632 · 641 | 365 · 402 · 425 · 447 · 469 | — · — · — · — · — | Trail 1 (849); Trail 2 (649); Trail 5 (899); Trail 7 (699) |

<details><summary>Productos en alcance sin datos</summary>

- https://www.cannondale.com/es-es/bikes/electric/e-mountain/moterra-neo/moterra-neo-carbon-1-c25172u — sin tabla de geometría en la página
- https://www.cannondale.com/es-es/bikes/electric/e-mountain/moterra-neo/moterra-neo-carbon-2-c25272u — sin tabla de geometría en la página
- https://www.cannondale.com/es-es/bikes/road/gravel/superx/superx-lab71-c17075u — sin tabla de geometría en la página
- https://www.cannondale.com/es-es/bikes/road/race/supersix-evo/supersix-evo-lab71-team — sin tabla de geometría en la página
- https://www.cannondale.com/es-es/bikes/road/race/supersix-evo/supersix-evo-lab71 — sin tabla de geometría en la página
- https://www.cannondale.com/es-es/bikes/road/race/supersix-evo/supersix-evo-lab71-c11135u — sin tabla de geometría en la página
- https://www.cannondale.com/es-es/bikes/mountain/cross-country/scalpel/scalpel-lab71 — sin tabla de geometría en la página
- https://www.cannondale.com/es-es/bikes/road/endurance/synapse-carbon/synapse-lab71-smartsense — sin tabla de geometría en la página
- https://www.cannondale.com/es-es/bikes/road/race/supersix-evo/supersix-evo-lab71-team-c11105u — sin tabla de geometría en la página
- https://www.cannondale.com/es-es/bikes/electric/e-mountain/trail-neo/trail-neo-3-c61353u — sin tabla de geometría en la página
- https://www.cannondale.com/es-es/bikes/electric/e-mountain/trail-neo/trail-neo-4-c61453u — sin tabla de geometría en la página
- https://www.cannondale.com/es-es/bikes/road/race/supersix-evo/supersix-evo-lab71-sl — sin tabla de geometría en la página
- https://www.cannondale.com/es-es/bikes/road/gravel/superx/superx-lab71 — sin tabla de geometría en la página
- https://www.cannondale.com/es-es/bikes/electric/e-mountain/moterra-neo/moterra-neo-5 — sin tabla de geometría en la página
- https://www.cannondale.com/es-es/bikes/electric/e-mountain/moterra-neo/moterra-neo-lab71-c65023u — sin tabla de geometría en la página
- https://www.cannondale.com/es-es/bikes/road/race/supersix-evo/supersix-evo-1 — sin tabla de geometría en la página
- https://www.cannondale.com/es-es/bikes/road/gravel/topstone-carbon/topstone-carbon-apex-axs — sin tabla de geometría en la página
- https://www.cannondale.com/es-es/bikes/road/gravel/topstone-alloy/topstone-3-c15802u — sin tabla de geometría en la página
- https://www.cannondale.com/es-es/bikes/road/race/caad-optimo/caad-optimo-1 — sin tabla de geometría en la página

</details>

<details><summary>Avisos</summary>

- Moterra EQ: 'N Stack (cm)' publicado en cm: convertido a mm (×10)
- Moterra EQ: 'O Reach (cm)' publicado en cm: convertido a mm (×10)
- SuperSix EVO LAB71: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- SuperSix EVO LAB71: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- SuperSix EVO LAB71 SL: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- SuperSix EVO LAB71 SL: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Synapse LAB71 SmartSense: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Synapse LAB71 SmartSense: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Scalpel LAB71 Team: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Scalpel LAB71 Team: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Scalpel HT LAB71: 'N Stack (cm)' publicado en cm: convertido a mm (×10)
- Scalpel HT LAB71: 'O Reach (cm)' publicado en cm: convertido a mm (×10)
- CAAD Optimo 3: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- CAAD Optimo 3: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Habit Carbon LT 1: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Habit Carbon LT 1: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Scalpel 3: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Scalpel 3: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Scalpel 4: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Scalpel 4: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Synapse Carbon 2 RLE: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Synapse Carbon 2 RLE: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Topstone Carbon 2 Lefty: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Topstone Carbon 2 Lefty: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Moterra SL LAB71: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Moterra SL LAB71: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- SuperX LAB71: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- SuperX LAB71: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Moterra 1: 'N Stack (cm)' publicado en cm: convertido a mm (×10)
- Moterra 1: 'O Reach (cm)' publicado en cm: convertido a mm (×10)
- Moterra SL 1: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Moterra SL 1: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Habit LTD: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Habit LTD: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- SuperSix EVO 1: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- SuperSix EVO 1: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Scalpel 1 Lefty: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Scalpel 1 Lefty: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Topstone Carbon LTD Lefty AXS: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Topstone Carbon LTD Lefty AXS: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- SuperSix EVO 1 SL: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- SuperSix EVO 1 SL: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Topstone Carbon 1 Lefty: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Topstone Carbon 1 Lefty: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Topstone Carbon 1 RLE: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Topstone Carbon 1 RLE: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- CAAD14 1: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- CAAD14 1: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Moterra LT 1: 'N Stack (cm)' publicado en cm: convertido a mm (×10)
- Moterra LT 1: 'O Reach (cm)' publicado en cm: convertido a mm (×10)
- Synapse Carbon 1: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Synapse Carbon 1: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Moterra 2: 'N Stack (cm)' publicado en cm: convertido a mm (×10)
- Moterra 2: 'O Reach (cm)' publicado en cm: convertido a mm (×10)
- SuperX 1: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- SuperX 1: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Moterra SL 2: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Moterra SL 2: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- SuperX 2: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- SuperX 2: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Topstone Carbon LTD Di2: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Topstone Carbon LTD Di2: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Synapse Carbon 2 SmartSense: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Synapse Carbon 2 SmartSense: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Habit Carbon 1 AXS: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Habit Carbon 1 AXS: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- SuperSix EVO 3: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- SuperSix EVO 3: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- SuperSix EVO 2: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- SuperSix EVO 2: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Topstone Carbon 1 Lefty AXS: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Topstone Carbon 1 Lefty AXS: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Scalpel 2 Lefty: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Scalpel 2 Lefty: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Synapse Carbon 2: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Synapse Carbon 2: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Topstone Carbon 1 AXS: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Topstone Carbon 1 AXS: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- SuperX 3: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- SuperX 3: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- SuperSix EVO 4: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- SuperSix EVO 4: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Moterra 3: 'N Stack (cm)' publicado en cm: convertido a mm (×10)
- Moterra 3: 'O Reach (cm)' publicado en cm: convertido a mm (×10)
- Synapse Carbon 3 SmartSense: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Synapse Carbon 3 SmartSense: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Habit Carbon 2: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Habit Carbon 2: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- SuperSix EVO 5: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- SuperSix EVO 5: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Trail Neo 2: 'N Stack (cm)' publicado en cm: convertido a mm (×10)
- Trail Neo 2: 'O Reach (cm)' publicado en cm: convertido a mm (×10)
- Moterra 4+: 'N Stack (cm)' publicado en cm: convertido a mm (×10)
- Moterra 4+: 'O Reach (cm)' publicado en cm: convertido a mm (×10)
- Moterra 4: 'N Stack (cm)' publicado en cm: convertido a mm (×10)
- Moterra 4: 'O Reach (cm)' publicado en cm: convertido a mm (×10)
- Topstone Carbon 2 AXS SmartSense: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Topstone Carbon 2 AXS SmartSense: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- CAAD14 2: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- CAAD14 2: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- SuperX 4 AXS: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- SuperX 4 AXS: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Topstone Carbon 2 AXS - 1x: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Topstone Carbon 2 AXS - 1x: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Topstone Carbon 2 GRX - 2x: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Topstone Carbon 2 GRX - 2x: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Habit 3: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Habit 3: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Synapse Carbon 4: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Synapse Carbon 4: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Scalpel HT Carbon 1: 'N Stack (cm)' publicado en cm: convertido a mm (×10)
- Scalpel HT Carbon 1: 'O Reach (cm)' publicado en cm: convertido a mm (×10)
- Topstone Carbon 3 GRX - 1x: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Topstone Carbon 3 GRX - 1x: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Topstone Carbon 3 GRX - 2x: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Topstone Carbon 3 GRX - 2x: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- SuperSix EVO 6: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- SuperSix EVO 6: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Synapse Carbon 5: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Synapse Carbon 5: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Topstone Carbon 4 CUES 1x: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Topstone Carbon 4 CUES 1x: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- CAAD14 3: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- CAAD14 3: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Scalpel HT Carbon 2: 'N Stack (cm)' publicado en cm: convertido a mm (×10)
- Scalpel HT Carbon 2: 'O Reach (cm)' publicado en cm: convertido a mm (×10)
- Topstone 1: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Topstone 1: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Topstone EQ: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Topstone EQ: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Topstone 2 GRX - 2x: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Topstone 2 GRX - 2x: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Topstone 2 CUES - 1x: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Topstone 2 CUES - 1x: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Scalpel HT Carbon 3: 'N Stack (cm)' publicado en cm: convertido a mm (×10)
- Scalpel HT Carbon 3: 'O Reach (cm)' publicado en cm: convertido a mm (×10)
- Habit HT 1: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Habit HT 1: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Topstone 3: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Topstone 3: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Habit HT 2: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Habit HT 2: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Trail 5: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Trail 5: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Trail 1: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Trail 1: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Trail 7: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Trail 7: 'P Reach (cm)' publicado en cm: convertido a mm (×10)
- Trail 2: 'O Stack (cm)' publicado en cm: convertido a mm (×10)
- Trail 2: 'P Reach (cm)' publicado en cm: convertido a mm (×10)

</details>

Descartados: año de modelo anterior: 10, duplicado (mismo modelo): 2

## Cervélo — OK

**Nota:** La web es-ES no publica precios (sí la de-DE, no usada).

Diff con bikes.csv: **+42** tallas nuevas, **−0** que desaparecen, **~0** con cambios. Productos candidatos: 7. Métodos: html. Descargas: {'httpx': 0, 'browser': 0, 'cache': 8, 'challenges': 0}.

| Familia | Cat. | Tallas | Stack | Reach | Altura (cm) | Modelos (precio €) |
|---|---|---|---|---|---|---|
| Caledonia [f625d619] | carretera | 48 · 51 · 54 · 56 · 58 · 61 | 505 · 530 · 555 · 580 · 605 · 630 | 360 · 369 · 378 · 387 · 396 · 405 | — · — · — · — · — · — | Caledonia (s/p) |
| Caledonia-5 [40740529] | carretera | 48 · 51 · 54 · 56 · 58 · 61 | 505 · 530 · 555 · 580 · 605 · 630 | 360 · 369 · 378 · 387 · 396 · 405 | — · — · — · — · — · — | Caledonia-5 (s/p) |
| R5 [0fa0715d] | carretera | 48 · 51 · 54 · 56 · 58 · 61 | 496.1 · 520.2 · 544.6 · 567.5 · 590.7 · 610.7 | 368.7 · 376.5 · 383.3 · 391.1 · 400.3 · 408.3 | — · — · — · — · — · — | R5 (s/p) |
| S5 [254edbb1] | carretera | 48 · 51 · 54 · 56 · 58 · 61 | 496 · 519 · 542 · 565 · 588 · 608 | 367 · 376 · 384 · 392 · 401 · 409 | — · — · — · — · — · — | S5 (s/p) |
| Soloist [c573097b] | carretera | 48 · 51 · 54 · 56 · 58 · 61 | 496.1 · 520.2 · 544.6 · 567.5 · 590.7 · 610.7 | 368.7 · 376.5 · 383.3 · 391.1 · 400.3 · 408.3 | — · — · — · — · — · — | Soloist (s/p) |
| Áspero [fb8b084a] | gravel | 48 · 51 · 54 · 56 · 58 · 61 | 505 · 530 · 555 · 580 · 605 · 630 | 370 · 379 · 388 · 397 · 406 · 415 | — · — · — · — · — · — | Áspero (s/p) |
| Áspero-5 [2d418a55] | gravel | 48 · 51 · 54 · 56 · 58 · 61 | 500 · 525 · 550 · 575 · 600 · 625 | 369 · 377 · 386 · 395 · 404 · 413 | — · — · — · — · — · — | Áspero-5 (s/p) |


## Focus — OK

Diff con bikes.csv: **+147** tallas nuevas, **−0** que desaparecen, **~0** con cambios. Productos candidatos: 30. Métodos: html. Descargas: {'httpx': 0, 'browser': 0, 'cache': 31, 'challenges': 0}.

| Familia | Cat. | Tallas | Stack | Reach | Altura (cm) | Modelos (precio €) |
|---|---|---|---|---|---|---|
| ATLAS [54bc9616] | gravel | XS · S · M · L · XL | 546 · 557 · 576 · 595 · 623 | 375 · 390 · 395 · 405 · 420 | — · — · — · — · — | ATLAS 8.7 (2699); ATLAS 8.8 (3499); ATLAS 8.9 (5299) |
| ATLAS [b8438776] | gravel | XS · S · M · L · XL | 556 · 572 · 591 · 610 · 638 | 365 · 380 · 385 · 395 · 410 | — · — · — · — · — | ATLAS 6.7 (1799); ATLAS 6.8 EQP (1999); ATLAS 6.9 (1999) |
| IZALCO MAX [5425924e] | carretera | XXS · XS · S · M · L · XL · XXL | 500 · 513 · 531 · 552 · 571 · 592 · 611 | 370 · 375 · 378 · 380 · 399 · 401 · 420 | — · — · — · — · — · — · — | IZALCO MAX 8.7 (2499); IZALCO MAX 8.8 (3299); IZALCO MAX 8.9 (4299); IZALCO MAX 9.7 (5999); IZALCO MAX 9.8 (6799); IZALCO MAX 9.9 (8499) |
| JAM [2354d38c] | emtb | S · M · L · XL | 630 · 639 · 648 · 657 | 425 · 455 · 480 · 510 | — · — · — · — | JAM 7 (4399+); JAM 8 (5399+); JAM 9 (6399+); JAM LTD (7499) |
| JAM² SL 9.0 [372e5d23] | emtb | S · M · L · XL | 614 · 614 · 632 · 650 | 430 · 460 · 485 · 515 | — · — · — · — | JAM² SL 9.0 (11499) |
| JAM² SL 9.9 [208a712d] | emtb | S · M · L · XL | 614 · 614 · 632 · 650 | 430 · 460 · 485 · 515 | — · — · — · — | JAM² SL 9.9 (8999) |
| JARIFA² [4a6c227c] | emtb | XS · S · M · L · XL | 636 · 657 · 680 · 690 · 699 | 395 · 400 · 420 · 440 · 460 | — · — · — · — · — | JARIFA² 6.7 (2599+); JARIFA² 6.7 X (2999+); JARIFA² 6.8 (3299+) |
| SAM 8 [1bddcd59] | emtb | S · M · L · XL | 630 · 639 · 648 · 666 | 435 · 465 · 490 · 520 | — · — · — · — | SAM 8 (5699+) |
| SAM 9 [0283fa7c] | emtb | S · M · L · XL | 630 · 639 · 648 · 666 | 435 · 465 · 490 · 520 | — · — · — · — | SAM 9 (7199+) |
| THRON [040e6645] | emtb | S · M · L · XL | 637 · 646 · 655 · 664 | 415 · 445 · 470 · 500 | — · — · — · — | THRON 7 (3699+); THRON 8 (4699+); THRON 9 (5699+) |
| VAM² SL [a7a645bd] | emtb | S · M · L · XL | 602 · 602 · 620 · 639 | 420 · 450 · 475 · 505 | — · — · — · — | VAM² SL 8.7 (5799); VAM² SL 9.0 (10999); VAM² SL 9.8 (6899); VAM² SL 9.9 (8699) |


## Santa Cruz — con avisos

**Nota:** Altura de la guía de tallas (X-Small, Small…) con la equivalencia XS/SM/MD/LG aprobada por el usuario. V10 publica 3 posiciones de reach y se rechaza.

Diff con bikes.csv: **+411** tallas nuevas, **−0** que desaparecen, **~0** con cambios. Productos candidatos: 98. Métodos: html. Descargas: {'httpx': 0, 'browser': 0, 'cache': 130, 'challenges': 0}.

| Familia | Cat. | Tallas | Stack | Reach | Altura (cm) | Modelos (precio €) |
|---|---|---|---|---|---|---|
| 5010 [b6209291] | mtb | xs · s · m · l · xl · xxl | 599 · 608 · 622 · 631 · 649 · 662 | 410 · 434 · 459 · 479 · 499 · 524 | — · — · — · — · — · — | 5010 GX AXS (8250); 5010 R 2024 (4599); 5010 S 2024 (5399); 5010 X0 AXS (9500); 5010 X0 AXS RSV (11000) |
| Blur [7ba70fac] | mtb | S · M · L · XL | 588 · 588 · 597 · 611 | 425 · 450 · 475 · 500 | 152–162 · 165–175 · 175–185 · 185–193 | Blur 90 (5999); Blur Deore (4999); Blur GX AXS (6999); Blur GX AXS Race RSV (7999); Blur X0 AXS RSV (9499); Blur XTR RSV (10999); Blur XX AXS Race FA RSV (12499) |
| Bronson [a8729eaa] | mtb | s · m · l · xl · xxl | 623 · 632 · 641 · 659 · 668 | 435 · 460 · 480 · 500 · 525 | — · — · — · — · — | Bronson 70 (5499); Bronson 90 (6399); Bronson Deore (5499); Bronson GX AXS (7399); Bronson R (5499); Bronson S (6399); Bronson X0 AXS (8799); Bronson X0 AXS RSV (9999) |
| Bullit [9cbdcfa4] | emtb | s · m · l · xl · xxl | 622 · 631 · 640 · 654 · 670 | 435 · 460 · 480 · 500 · 525 | — · — · — · — · — | Bullit 90 (7999); Bullit Deore (6999); Bullit GX AXS (8999); Bullit X0 AXS RSV (10999); Bullit XT Di2 RSV (10999) |
| Chameleon [d8e1824e] | mtb | s · m · l · xl | 620.1 · 629.2 · 638.2 · 647.3 | 420 · 445 · 465 · 490 | 152–165 · 165–177 · 177–185 · 185–198 | Chameleon D (2200); Chameleon R (2750); Chameleon S (3100) |
| Heckler SL [0c472810] | emtb | s · m · l · xl · xxl | 614.9 · 624 · 633 · 651 · 664.5 | 435 · 460 · 480 · 500 · 525 | — · — · — · — · — | Heckler SL 70 (4799); Heckler SL 90 (5299); Heckler SL GX AXS (6299); Heckler SL R (7499); Heckler SL S (4999); Heckler SL Stout (6299); Heckler SL X0 AXS RSV (6999); Heckler SL XX AXS RSV (7999) |
| Heckler [551d298c] | emtb | s · m · l · xl · xxl | 607.3 · 615.8 · 629.4 · 647.5 · 665.6 | 430 · 455 · 475 · 495 · 520 | — · — · — · — · — | Heckler GX AXS 2024 (7999); Heckler R 2024 (6499); Heckler S 2024 (7499); Heckler X0 AXS RSV 2024 (10999); Heckler XX AXS RSV 2024 (10999) |
| Highball [51069cea] | mtb | s · m · l · xl | 596 · 605 · 614 · 633 | 415 · 440 · 460 · 490 | 152–165 · 165–177 · 177–185 · 185–198 | Highball GX AXS (5299); Highball R (3799); Highball S (4499); Highball X0 AXS RSV (9699) |
| Hightower [64cefe22] | mtb | s · m · l · xl · xxl | 623 · 632 · 641 · 659 · 668 | 435 · 460 · 480 · 500 · 525 | — · — · — · — · — | Hightower 70 (5499); Hightower 90 (6399); Hightower Deore (5499); Hightower GX AXS (7399); Hightower R (5499); Hightower S (6399); Hightower X0 AXS (8799); Hightower X0 AXS RSV (9999); Hightower XX AXS RSV (11499) |
| Megatower [b9a72469] | mtb | s · m · l · xl · xxl | 616 · 625 · 638 · 656 · 670 | 430 · 455 · 475 · 495 · 520 | — · — · — · — · — | Megatower 70 (5599); Megatower 90 (6599); Megatower GX AXS (7699); Megatower X0 AXS (9299); Megatower X0 AXS RSV (10499) |
| Nomad [501c6125] | mtb | S · M · L · XL · XXL | 624 · 633 · 643 · 660 · 669 | 435 · 455 · 475 · 495 · 520 | — · — · — · — · — | Nomad 90 (6299); Nomad Deore (5299); Nomad GX AXS (7499); Nomad X0 AXS RSV Coil (10199); Nomad XT Di2 Coil (8299) |
| Skitch Apex [701788cc] | gravel | s · m · l · xl · xxl | 563 · 579 · 596 · 610 · 630 | 390 · 405 · 420 · 435 · 450 | 154–167 · 162–177 · 170–182 · 177–190 · 185–198 | Skitch Apex (6499); Skitch Apex Flat Bar (6499) |
| Stigmata Apex [8caa2de4] | gravel | XS · SM · MD · LG · XL · XXL | 550 · 564 · 576 · 600 · 612 · 631 | 375 · 390 · 405 · 420 · 435 · 450 | — · — · — · — · — · — | Stigmata Apex (3599) |
| Stigmata [305153d3] | gravel | XS · SM · MD · LG · XL · XXL | 550 · 564 · 576 · 600 · 612 · 631 | 375 · 390 · 405 · 420 · 435 · 450 | 152–160 · 160–167 · 167–175 · 175–182 · 182–188 · 188–193 | Stigmata Force 1x AXS RSV (6499); Stigmata Force 1x AXS RSV Rudy 2026 (7799); Stigmata Rival 1x AXS (4999); Stigmata Rival 1x AXS Rudy 2026 (5299) |
| Tallboy [839ee2df] | mtb | XS · S · M · L · XL · XXL | 601 · 610 · 624 · 633 · 646 · 660 | 410 · 435 · 455 · 475 · 495 · 520 | — · — · — · — · — · — | Tallboy 90 (5999); Tallboy GX AXS (6999); Tallboy X0 AXS RSV (9499); Tallboy XT Di2 (7999); Tallboy XX AXS FA RSV (12999) |
| Vala [1b769861] | emtb | S · M · L · XL · XXL | 623 · 632 · 641 · 655 · 668 | 435 · 460 · 480 · 500 · 525 | — · — · — · — · — | Vala 90 (7999); Vala AL Deore 6200 (4999); Vala C Deore (6999); Vala GX AXS (8999); Vala XT Di2 RSV (9999); Vala XT Lite (7999) |

<details><summary>Tallas rechazadas por la validación</summary>

- V10 DH X01 s: falta reach
- V10 DH X01 m: falta reach
- V10 DH X01 l: falta reach
- V10 DH X01 xl(29): falta reach
- V10 DH S s: falta reach
- V10 DH S m: falta reach
- V10 DH S l: falta reach
- V10 DH S xl(29): falta reach

</details>

<details><summary>Avisos</summary>

- Heckler GX AXS 2024: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Heckler GX AXS 2024: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Heckler R 2024: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Heckler R 2024: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Heckler S 2024: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Heckler S 2024: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Heckler X0 AXS RSV 2024: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Heckler X0 AXS RSV 2024: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Heckler XX AXS RSV 2024: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Heckler XX AXS RSV 2024: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Heckler SL R: 'Stack' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Heckler SL R: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Heckler SL S: 'Stack' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Heckler SL S: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Heckler SL X0 AXS RSV: 'Stack' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Heckler SL X0 AXS RSV: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Heckler SL XX AXS RSV: 'Stack' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Heckler SL XX AXS RSV: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Heckler SL 70: 'Stack' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Heckler SL 70: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Heckler SL 90: 'Stack' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Heckler SL 90: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Heckler SL Stout: 'Stack' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Heckler SL Stout: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Heckler SL GX AXS: 'Stack' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Heckler SL GX AXS: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Bullit 90: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Bullit 90: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Bullit Deore: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Bullit Deore: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Bullit GX AXS: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Bullit GX AXS: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Bullit X0 AXS RSV: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Bullit X0 AXS RSV: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Bullit XT Di2 RSV: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Bullit XT Di2 RSV: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- 5010 R 2024: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- 5010 R 2024: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- 5010 S 2024: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- 5010 S 2024: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- 5010 GX AXS: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- 5010 GX AXS: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- 5010 X0 AXS: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- 5010 X0 AXS: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- 5010 X0 AXS RSV: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- 5010 X0 AXS RSV: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Bronson 70: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Bronson 70: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Bronson 90: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Bronson 90: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Bronson Deore: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Bronson Deore: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Bronson GX AXS: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Bronson GX AXS: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Bronson R: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Bronson R: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Bronson S: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Bronson S: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Bronson X0 AXS: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Bronson X0 AXS: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Bronson X0 AXS RSV: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Bronson X0 AXS RSV: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Hightower 70: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Hightower 70: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Hightower 90: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Hightower 90: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Hightower Deore: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Hightower Deore: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Hightower GX AXS: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Hightower GX AXS: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Hightower R: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Hightower R: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Hightower S: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Hightower S: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Hightower X0 AXS: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Hightower X0 AXS: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Hightower X0 AXS RSV: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Hightower X0 AXS RSV: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Hightower XX AXS RSV: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Hightower XX AXS RSV: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Megatower 70: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Megatower 70: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Megatower 90: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Megatower 90: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Megatower GX AXS: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Megatower GX AXS: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Megatower X0 AXS: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Megatower X0 AXS: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Megatower X0 AXS RSV: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Megatower X0 AXS RSV: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Nomad 90: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Nomad 90: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Nomad Deore: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Nomad Deore: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Nomad GX AXS: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Nomad GX AXS: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Nomad X0 AXS RSV Coil: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Nomad X0 AXS RSV Coil: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Nomad XT Di2 Coil: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Nomad XT Di2 Coil: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Tallboy 90: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Tallboy 90: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Tallboy GX AXS: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Tallboy GX AXS: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Tallboy X0 AXS RSV: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Tallboy X0 AXS RSV: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Tallboy XT Di2: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Tallboy XT Di2: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Tallboy XX AXS FA RSV: 'Stack (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera
- Tallboy XX AXS FA RSV: 'Reach (Hi/Lo)' publica dos posiciones (p. ej. Hi/Lo): se usa la primera

</details>

Descartados: año de modelo anterior: 11, duplicado (mismo modelo): 3

## Lapierre — con avisos

**Nota:** Rechazos por stack/reach no crecientes publicados así en la web (p. ej. Sensium: S 542 > M 530).

Diff con bikes.csv: **+270** tallas nuevas, **−0** que desaparecen, **~0** con cambios. Productos candidatos: 66. Métodos: html. Descargas: {'httpx': 0, 'browser': 0, 'cache': 80, 'challenges': 0}.

| Familia | Cat. | Tallas | Stack | Reach | Altura (cm) | Modelos (precio €) |
|---|---|---|---|---|---|---|
| Crosshill CF [029dd32b] | gravel | XS · S · M · L · XL · XXL | 546 · 567 · 581 · 601 · 620 · 644 | 367 · 373 · 380 · 386 · 390 · 398 | — · — · — · — · — · — | Crosshill CF 5.0 (2799); Crosshill CF 6.0 (3199); Crosshill CF 7.0 (4499); Crosshill CF 8.0 (5999); Crosshill CF 9.0 (6999) |
| Crosshill [47a5d364] | gravel | XS · S · M · L · XL | 517 · 547 · 606 · 606 · 636 | 367 · 377 · 379 · 388 · 389 | — · — · — · — · — | Crosshill 2.0 (1299); Crosshill AL 3.0 (1699); Crosshill AL 4.0 (2199) |
| OVERVOLT AM [93fdbac6] | emtb | S · M · L · XL | 638 · 641 · 659 · 678 | 433 · 455 · 475 · 475 | — · — · — · — | OVERVOLT AM 9.8 (7499); Overvolt AM 7.8 (6499) |
| Overvolt AM AL 5.8 [6623dc94] | emtb | S · M · L · XL | 638 · 641 · 659 · 678 | 433 · 455 · 475 · 500 | — · — · — · — | Overvolt AM AL 5.8 (5299) |
| Overvolt AM [17dccee7] | emtb | S · M · L · XL | 628 · 640 · 654 · 667 | 438 · 460 · 479 · 506 | — · — · — · — | Overvolt AM 10.8 (10000); Overvolt AM CF 6.8 (7299); Overvolt AM CF 7.8 (8499) |
| Overvolt HT 5.6 [7c38d4a4] | emtb | S · M · L · XL | 656 · 674 · 683 · 692 | 422 · 432 · 452 · 475 | — · — · — · — | Overvolt HT 5.6 (2999) |
| Overvolt HT [9e6cd751] | emtb | S · M · L · XL | 656 · 674 · 683 · 692 | 422 · 432 · 452 · 472 | — · — · — · — | Overvolt HT 6.6 (3499); Overvolt HT 8.8 (3999) |
| Overvolt TR 7.8 [94bd61ae] | emtb | S · M · L · XL | 597 · 609 · 627 · 646 | 438 · 458 · 477 · 503 | — · — · — · — | Overvolt TR 7.8 (5699) |
| Overvolt TR [4517feb4] | emtb | S · M · L · XL | 603 · 615 · 633 · 651 | 430 · 450 · 470 · 495 | — · — · — · — | Overvolt TR 4.6 (4499); Overvolt TR 6.8 (4999) |
| Prorace 3.9 [54331912] | mtb | S · M · L · XL | 597 · 602 · 607 · 616 | 410 · 435 · 455 · 480 | — · — · — · — | Prorace 3.9 (1099) |
| Prorace 4.9 [640f57da] | mtb | S · M · L · XL | 597 · 602 · 607 · 616 | 410 · 435 · 455 · 480 | — · — · — · — | Prorace 4.9 (1399) |
| Prorace [c8af400b] | mtb | S · M · L · XL | 620.4 · 630 · 639 · 648 | 391 · 408 · 425 · 443 | — · — · — · — | Prorace 1.9 (699); Prorace 2.9 (899) |
| Pulsium [72de4fe2] | carretera | XS · S · M · L · XL · XXL | 527 · 541 · 562 · 579 · 599 · 618 | 375 · 379 · 384 · 389 · 394 · 400 | — · — · — · — · — · — | Pulsium 4.0 (2299); Pulsium 5.0 (2599); Pulsium 6.0 (3399); Pulsium 6.0 AXS (3599); Pulsium 7.0 (3999); Pulsium 8.0 (4999); Pulsium 8.0 AXS (5999) |
| Spicy CF [16d10963] | mtb | XS · S · M · L · XL | 627 · 636 · 641 · 645 · 654 | 410 · 435 · 460 · 480 · 505 | — · — · — · — · — | Spicy CF 6.9 (5499); Spicy CF 7.9 (6499); Spicy CF 8.9 (7999); Spicy CF Team (10000) |
| XRM [d5d06bc6] | mtb | S · M · L · XL | 584 · 589 · 598 · 608 | 415 · 440 · 460 · 485 | — · — · — · — | XRM 10.9 (8199); XRM 6.9 (4399); XRM 7.9 (4799); XRM 8.9 (5499); XRM 9.9 (6699) |
| Xelius DRS 10.0 [be4daab6] | carretera | XS · S · M · L · XL · XXL | 501 · 516 · 538 · 557 · 580 · 599 | 376 · 383 · 393 · 403 · 415 · 428 | — · — · — · — · — · — | Xelius DRS 10.0 (9999) |
| Xelius DRS Team Replica [4e2d75be] | carretera | S · M · L · XL | 516 · 538 · 557 · 580 | 383 · 393 · 403 · 415 | — · — · — · — | Xelius DRS Team Replica (9999) |
| Xelius DRS [b70ee34c] | carretera | XS · S · M · L · XL · XXL | 501 · 516 · 538 · 557 · 580 · 599 | 376 · 383 · 393 · 403 · 415 · 428 | — · — · — · — · — · — | Xelius DRS 10.0 AXS (10499); Xelius DRS 6.0 (3699); Xelius DRS 6.0 AXS (3899); Xelius DRS 7.0 (3999); Xelius DRS 9.0 (7499); xelius DRS 8.0 (5499) |
| Zesty CF [9f62f242] | mtb | S · M · L · XL | 617 · 626 · 635 · 644 | 435 · 460 · 480 · 505 | — · — · — · — | Zesty CF 10.9 (10000); Zesty CF 6.9 (4499); Zesty CF 7.9 (4999); Zesty CF 8.9 (5999); Zesty CF 9.9 (7799) |
| Zesty TR 3.7 [645f7662] | mtb | XS | 561 | 385 | — | Zesty TR 3.7 (2299) |
| Zesty TR [e835c914] | mtb | S · M · L · XL | 615.5 · 621.9 · 633.7 · 642.9 | 431.9 · 458 · 478 · 503 | — · — · — · — | Zesty TR 3.9 (2299); Zesty TR 4.9 (2899); Zesty TR 5.9 (3399) |

<details><summary>Tallas rechazadas por la validación</summary>

- Xelius DRS 8.0 AXS XS: reach decrece al subir de talla (S: 376 < 383)
- Xelius DRS 8.0 AXS S: reach decrece al subir de talla (S: 376 < 383)
- Xelius DRS 8.0 AXS M: reach decrece al subir de talla (S: 376 < 383)
- Xelius DRS 8.0 AXS L: reach decrece al subir de talla (S: 376 < 383)
- Xelius DRS 8.0 AXS XL: reach decrece al subir de talla (S: 376 < 383)
- Xelius DRS 8.0 AXS XXL: reach decrece al subir de talla (S: 376 < 383)
- Sensium 3.0 Disc XS: stack decrece al subir de talla (M: 530 < 542)
- Sensium 3.0 Disc S: stack decrece al subir de talla (M: 530 < 542)
- Sensium 3.0 Disc M: stack decrece al subir de talla (M: 530 < 542)
- Sensium 3.0 Disc L: stack decrece al subir de talla (M: 530 < 542)
- Sensium 3.0 Disc XL: stack decrece al subir de talla (M: 530 < 542)
- Sensium 3.0 Disc XXL: stack decrece al subir de talla (M: 530 < 542)
- Sensium 3.0 XS: stack decrece al subir de talla (M: 530 < 542)
- Sensium 3.0 S: stack decrece al subir de talla (M: 530 < 542)
- Sensium 3.0 M: stack decrece al subir de talla (M: 530 < 542)
- Sensium 3.0 L: stack decrece al subir de talla (M: 530 < 542)
- Sensium 3.0 XL: stack decrece al subir de talla (M: 530 < 542)
- Sensium 3.0 XXL: stack decrece al subir de talla (M: 530 < 542)
- Sensium 2.0 XS: stack decrece al subir de talla (M: 530 < 542)
- Sensium 2.0 S: stack decrece al subir de talla (M: 530 < 542)
- Sensium 2.0 M: stack decrece al subir de talla (M: 530 < 542)
- Sensium 2.0 L: stack decrece al subir de talla (M: 530 < 542)
- Sensium 2.0 XL: stack decrece al subir de talla (M: 530 < 542)
- Sensium 2.0 XXL: stack decrece al subir de talla (M: 530 < 542)
- Sensium 1.0 XS: stack decrece al subir de talla (M: 530 < 542)
- Sensium 1.0 S: stack decrece al subir de talla (M: 530 < 542)
- Sensium 1.0 M: stack decrece al subir de talla (M: 530 < 542)
- Sensium 1.0 L: stack decrece al subir de talla (M: 530 < 542)
- Sensium 1.0 XL: stack decrece al subir de talla (M: 530 < 542)
- Sensium 1.0 XXL: stack decrece al subir de talla (M: 530 < 542)
- Prorace CF 7.9 S: stack decrece al subir de talla (M: 597 < 598)
- Prorace CF 7.9 M: stack decrece al subir de talla (M: 597 < 598)
- Prorace CF 7.9 L: stack decrece al subir de talla (M: 597 < 598)
- Prorace CF 7.9 XL: stack decrece al subir de talla (M: 597 < 598)
- Prorace CF 5.9 S: stack decrece al subir de talla (M: 597 < 598)
- Prorace CF 5.9 M: stack decrece al subir de talla (M: 597 < 598)
- Prorace CF 5.9 L: stack decrece al subir de talla (M: 597 < 598)
- Prorace CF 5.9 XL: stack decrece al subir de talla (M: 597 < 598)

</details>

<details><summary>Productos en alcance sin datos</summary>

- https://lapierrebikes.com/es-es/products/prorace-sl-24-lpaud — sin tabla de geometría en la página
- https://lapierrebikes.com/es-es/products/prorace-20-sl-lpauc — sin tabla de geometría en la página

</details>


## Ghost — con avisos

Diff con bikes.csv: **+157** tallas nuevas, **−0** que desaparecen, **~0** con cambios. Productos candidatos: 40. Métodos: html. Descargas: {'httpx': 0, 'browser': 0, 'cache': 46, 'challenges': 0}.

| Familia | Cat. | Tallas | Stack | Reach | Altura (cm) | Modelos (precio €) |
|---|---|---|---|---|---|---|
| ASKET CF [b7d7a1d3] | gravel | XS · S · M · L · XL | 542 · 560 · 581 · 612 · 642 | 375 · 387 · 400 · 418 · 443 | — · — · — · — · — | ASKET CF FULL PARTY (3499); ASKET CF LTD (6999); ASKET CF PRO (2999); ASKET CF X (4999) |
| ASKET [10344203] | gravel | XS · S · M · L · XL | 558 · 587 · 612 · 641 · 666 | 373 · 392 · 407 · 427 · 444 | — · — · — · — · — | ASKET (1599); ASKET ADVANCED (2299); ASKET ADVANCED EQ (2499); ASKET EQ (1799) |
| E-ASX [ccc720f4] | emtb | S · M · L · XL | 628 · 632 · 646 · 659 | 430 · 455 · 480 · 510 | — · — · — · — | E-ASX ABS (6499); E-ASX ADVANCED (5999); E-ASX UNIVERSAL (4699+) |
| E-RIOT LTD [d4af3c94] | emtb | S · M · L · XL | 617.9 · 626.9 · 640.4 · 653.9 | 435 · 465 · 490 · 515 | — · — · — · — | E-RIOT LTD (11000) |
| E-RIOT PRO [173e8486] | emtb | S · M · L · XL | 617.9 · 626.9 · 640.4 · 653.9 | 435 · 465 · 490 · 515 | — · — · — · — | E-RIOT PRO (8000) |
| E-RIOT [88715ea1] | emtb | S · M · L · XL | 617.9 · 626.9 · 640.4 · 653.9 | 435 · 465 · 490 · 515 | — · — · — · — | E-RIOT ADVANCED (6499); E-RIOT FULL PARTY (9500) |
| KATO FS UNIVERSAL 29 [aa9c7e77] | mtb | M · L | 625 · 639 | 463 · 494 | — · — | KATO FS UNIVERSAL 29 (1999) |
| KATO FS [16202ffc] | mtb | XS · S | 587 · 587 | 415 · 451 | — · — | KATO FS 27.5 (1499); KATO FS PRO 27.5 (2499); KATO FS UNIVERSAL 27.5 (1999) |
| KATO FS [a296e156] | mtb | M · L · XL | 625 · 639 · 662 | 463 · 494 · 521 | — · — · — | KATO FS 29 (1499); KATO FS PRO 29 (2499) |
| LECTOR FS [0d9a98b0] | mtb | XS · S · M · L · XL | 581 · 582 · 601 · 618 · 636 | 418 · 458 · 489 · 507 · 533 | — · — · — · — · — | LECTOR FS ADVANCED (5499); LECTOR FS ESSENTIAL (4699); LECTOR FS PRO (7499) |
| LECTOR [19702d12] | mtb | XS · S · M · L · XL | 611 · 611 · 611 · 634 · 661 | 412 · 448 · 484 · 510 · 535 | — · — · — · — · — | LECTOR ADVANCED (2999); LECTOR PRO (3999); LECTOR UNIVERSAL (2499) |
| PATH RIOT CF FULL PARTY [be2eb347] | emtb | S · M · L · XL | 607 · 626 · 648 · 666 | 435 · 465 · 492 · 522 | — · — · — · — | PATH RIOT CF FULL PARTY (8500) |
| PATH RIOT [86f5f58f] | emtb | S · M · L · XL | 604 · 622 · 644 · 662 | 440 · 470 · 497 · 527 | — · — · — · — | PATH RIOT ADVANCED (6999); PATH RIOT CF LTD (11000) |
| POACHA [9609cabb] | mtb | S · M · L · XL | 636 · 640 · 649 · 658 | 440 · 471 · 496 · 516 | — · — · — · — | POACHA (4999); POACHA FULL PARTY (8000); POACHA PRO (6499) |
| RIOT AM CF [ea7beafc] | mtb | S · M · L · XL | 607 · 626 · 648 · 666 | 435 · 465 · 492 · 522 | — · — · — · — | RIOT AM CF FULL PARTY (6199); RIOT AM CF PRO (5499) |
| RIOT TRAIL CF [de5e4a92] | mtb | S · M · L · XL | 604 · 622 · 644 · 662 | 441 · 471 · 497 · 527 | — · — · — · — | RIOT TRAIL CF (4499); RIOT TRAIL CF FULL PARTY (5999); RIOT TRAIL CF PRO (5499) |
| RIOT YOUTH PRO [e64cd488] | mtb | XS | 587 | 415 | — | RIOT YOUTH PRO (1999) |

<details><summary>Avisos</summary>

- ASKET: columnas de talla reordenadas

</details>

Descartados: excluido por nombre (cuadro, kit, junior…): 1

## Haibike — con avisos

Diff con bikes.csv: **+112** tallas nuevas, **−0** que desaparecen, **~0** con cambios. Productos candidatos: 41. Métodos: html. Descargas: {'httpx': 0, 'browser': 0, 'cache': 44, 'challenges': 0}.

| Familia | Cat. | Tallas | Stack | Reach | Altura (cm) | Modelos (precio €) |
|---|---|---|---|---|---|---|
| ALLMTN CF [5479e076] | emtb | S · M · L · XL | 617 · 626 · 635 · 644 | 425 · 455 · 485 · 515 | — · — · — · — | ALLMTN CF 10 TRN/IQ (8000); ALLMTN CF 11 TRN/IQ (9000) |
| ALLMTN CF [6aaf3b78] | emtb | S · M · L · XL | 631 · 640 · 649 · 658 | 427 · 456 · 487 · 516 | — · — · — · — | ALLMTN CF 9 (7199); ALLMTN CF 9.5 ABS (8000) |
| ALLMTN [c56df465] | emtb | S · M · L · XL | 651 · 651 · 656 · 660 | 408 · 435 · 468 · 501 | — · — · — · — | ALLMTN 4 (4999); ALLMTN 6 (5499) |
| ALLTRACK [8d626734] | emtb | S · M · L · XL | 656 · 674 · 683 · 692 | 422 · 432 · 452 · 472 | — · — · — · — | ALLTRACK 10 (4199); ALLTRACK 11 ABS (4799); ALLTRACK 4 (2999); ALLTRACK 6 (3399); ALLTRACK 6.5 (3599) |
| ALLTRACK [faa99c10] | emtb | S | 624 | 405 | — | ALLTRACK (2999) |
| ALLTRAIL 3 [ff2c341c] | emtb | S · M · L · XL | 637 · 652 · 661 · 670 | 425 · 436 · 454 · 471 | — · — · — · — | ALLTRAIL 3 (4299) |
| ALLTRAIL 8 [de855179] | emtb | S · M · L | 614 · 619 · 632 | 425 · 444 · 466 | — · — · — | ALLTRAIL 8 (4999) |
| ALLTRAIL [17a8a8d0] | emtb | S · M · L · XL | 645 · 645 · 663 · 677 | 432 · 442 · 461 · 477 | — · — · — · — | ALLTRAIL 4 (3999); ALLTRAIL 6 (4499) |
| ALLTRAIL [1acd4e6a] | emtb | S · M · L · XL | 621 · 640 · 644 · 649 | 424 · 443 · 468 · 494 | — · — · — · — | ALLTRAIL 10 (5499); ALLTRAIL 10.5 ABS (6299) |
| ALLTRAIL [8fb6e9e1] | emtb | S · M · L · XL | 632 · 647 · 656 · 665 | 433 · 444 · 461 · 479 | — · — · — · — | ALLTRAIL 5 (4599); ALLTRAIL 9 (5299) |
| HYBE 10.5 [2dfedc9c] | emtb | S · M · L · XL | 646 · 646 · 655 · 664 | 421 · 451 · 475 · 505 | — · — · — · — | HYBE 10.5 (7999) |
| HYBE CF [60771709] | emtb | S · M · L · XL | 633 · 642 · 651 · 660 | 421 · 451 · 481 · 511 | — · — · — · — | HYBE CF 11 (11000); HYBE CF 9 (7499) |
| LYKE CF [fbd0685b] | emtb | S · M · L · XL | 611 · 620 · 629 · 638 | 424 · 452 · 479 · 506 | — · — · — · — | LYKE CF 10 (6999); LYKE CF 11 (8000); LYKE CF SE (13000) |
| NDURO [5911ce8d] | emtb | S · M · L · XL | 644 · 644 · 653 · 662 | 425 · 455 · 480 · 510 | — · — · — · — | NDURO 6 (5999); NDURO 7 (6499); NDURO 8 Freeride (7499) |

<details><summary>Tallas rechazadas por la validación</summary>

- ALLTRAIL 8 XL: falta stack; falta reach
- ALLMTN 7 S: reach decrece al subir de talla (M: 451 < 475)
- ALLMTN 7 M: reach decrece al subir de talla (M: 451 < 475)
- ALLMTN 7 L: reach decrece al subir de talla (M: 451 < 475)
- ALLMTN 7 XL: falta stack; falta reach; reach decrece al subir de talla (M: 451 < 475)
- ALLMTN 3 S: reach decrece al subir de talla (M: 451 < 475)
- ALLMTN 3 M: reach decrece al subir de talla (M: 451 < 475)
- ALLMTN 3 L: reach decrece al subir de talla (M: 451 < 475)
- ALLMTN 3 XL: falta stack; falta reach; reach decrece al subir de talla (M: 451 < 475)
- ALLMTN 2 S: reach decrece al subir de talla (M: 451 < 475)
- ALLMTN 2 M: reach decrece al subir de talla (M: 451 < 475)
- ALLMTN 2 L: reach decrece al subir de talla (M: 451 < 475)
- ALLMTN 2 XL: falta stack; falta reach; reach decrece al subir de talla (M: 451 < 475)

</details>

<details><summary>Productos en alcance sin datos</summary>

- https://haibike.com/es-es/products/allmtn-2-hmbu1 — sin tabla de geometría en la página

</details>

<details><summary>Avisos</summary>

- ALLTRACK 11 ABS: columnas de talla reordenadas

</details>

Descartados: duplicado (mismo modelo): 8

## Orbea — con avisos

**Nota:** Geometría con etiquetas Stack/Reach de la ficha en-int (la es-es las traduce como Altura/Largo del cuadro); precio de la ficha es-es. Gama Rise y cuadros OMX/OMR sin tabla.

Diff con bikes.csv: **+405** tallas nuevas, **−0** que desaparecen, **~0** con cambios. Productos candidatos: 101. Métodos: html, json. Descargas: {'httpx': 0, 'browser': 0, 'cache': 214, 'challenges': 0}.

| Familia | Cat. | Tallas | Stack | Reach | Altura (cm) | Modelos (precio €) |
|---|---|---|---|---|---|---|
| Alma [64acfe5b] | mtb | S · M · L · XL | 611 · 620 · 630 · 643 | 405 · 435 · 460 · 485 | 155–170 · 165–180 · 178–190 · 185–198 | Alma H20 (1399); Alma H30 (1099) |
| Alma [f4359bc8] | mtb | S · M · L · XL | 618.5 · 618.5 · 623.1 · 632.3 | 405 · 435 · 460 · 485 | 155–170 · 165–180 · 178–190 · 185–198 | Alma Carbon (1599); Alma M-LTD (7999); Alma M-PRO (3999); Alma M-TEAM AXS (5499); Alma M20 (3199); Alma M30 (2399); Alma M50 (1999) |
| Avant [e3ab8958] | carretera | 47 · 49 · 51 · 53 · 55 · 57 · 60 | 525 · 545 · 565 · 585 · 605 · 625 · 645 | 370 · 375 · 380 · 385 · 391 · 398 · 404 | 155–160 · 160–166 · 167–172 · 173–179 · 180–185 · 186–191 · 192–207 | Avant H30 (1999); Avant H40 (1799); Avant H50 (1699) |
| Laufey [bf5ab33e] | mtb | S · M · L · XL | 633 · 642 · 655.5 · 664.5 | 427 · 451 · 475 · 500 | 150–165 · 160–175 · 170–185 · 180–198 | Laufey H-LTD (2499); Laufey H10 (1899); Laufey H30 (1499) |
| Occam LT [2b7c7f74] | mtb | S · M · L · XL | 615 · 620 · 630 · 638 | 435 · 460 · 485 · 510 | 150–170 · 160–180 · 170–190 · 180–200 | Occam LT H10 (3799); Occam LT H30 (2799) |
| Occam LT [d1400d60] | mtb | S · M · L · XL | 618 · 622 · 631 · 641 | 432 · 458 · 483 · 508 | 150–170 · 160–180 · 170–190 · 180–200 | Occam LT M-TEAM (7999); Occam LT M10 (5999); Occam LT M30 (4499) |
| Occam SL [616416f4] | mtb | S · M · L · XL | 612 · 617 · 626 · 635 | 438 · 463 · 488 · 513 | 150–170 · 160–180 · 170–190 · 180–200 | Occam SL M-LTD (9999); Occam SL M10 (5999); Occam SL M30 (4299) |
| Occam SL [ec8a29f6] | mtb | S · M · L · XL | 610 · 615 · 623 · 633 | 440 · 465 · 490 · 515 | 150–170 · 160–180 · 170–190 · 180–200 | Occam SL H10 (3499); Occam SL H30 (2599) |
| Oiz [693d4684] | mtb | S · M · L · XL | 595.5 · 595.5 · 604.5 · 618.5 | 425 · 450 · 472 · 495 | 155–170 · 165–180 · 178–190 · 185–198 | Oiz M-LTD (10999); Oiz M-PRO (7299); Oiz M-Team AXS (7499); Oiz M-Team Factory (9499); Oiz M10 (5999); Oiz M10 AXS (6999); Oiz M20 (4799); Oiz M30 (3799) |
| Oiz [e55732a9] | mtb | S · M · L · XL | 596 · 600 · 610 · 619 | 425 · 450 · 472 · 496 | 155–170 · 165–180 · 178–190 · 185–198 | Oiz H10 (2999); Oiz H30 (2499) |
| Onna [dd46f29c] | mtb | 27.5" | 582 | 365 | — | Onna 20 (899); Onna 40 (649); Onna 50 (599) |
| Orca [ba9930db] | carretera | 47 · 49 · 51 · 53 · 55 · 57 · 60 | 506 · 515 · 533 · 552 · 572 · 590 · 616 | 370 · 375 · 380 · 385 · 391 · 398 · 404 | 155–160 · 160–166 · 167–172 · 173–179 · 180–185 · 186–191 · 192–207 | Orca M10i LTD PWR (10999); Orca M10i LTD PWR Replica (10999); Orca M11e LTD PWR (10999); Orca M20i LTD PWR (6999); Orca M20i TEAM (4999); Orca M21e LTD PWR (7999); Orca M21eTEAM (5999); Orca M22 LTD PWR (7999); Orca M22 TEAM (5999); Orca M30 (2599); Orca M30i (3399); Orca M30i LTD PWR (5799); Orca M35i (4199) |
| Rallon [2c37aa8d] | mtb | S · M · L · XL | 629.2 · 638.2 · 647.2 · 656.2 | 430 · 455 · 478 · 505 | 150–170 · 160–180 · 170–190 · 180–200 | Rallon E-LTD (9999); Rallon E-TEAM (6999); Rallon E10 (5399) |
| Rise SL H30 [0fa08fb3] | emtb | S · M · L · XL | 609 · 613 · 623 · 632 | 440 · 465 · 490 · 515 | 150–170 · 160–180 · 170–190 · 180–200 | Rise SL H30 (4699) |
| Terra [04162f26] | gravel | XS · S · M · L · XL · XXL | 535 · 558 · 580 · 602 · 625 · 645 | 386 · 392 · 400 · 406 · 412 · 417 | 155–166 · 167–172 · 173–179 · 180–185 · 186–191 · 192–207 | Terra H30 (1999); Terra H30 1X (1999); Terra H40 (1799); Terra H40 1X (1799); Terra H50 (1699) |
| Terra [8d0ebc75] | gravel | XS · S · M · L · XL · XXL | 535 · 558 · 580 · 602 · 625 · 645 | 386 · 392 · 400 · 406 · 412 · 417 | 155–166 · 167–172 · 173–179 · 180–185 · 186–191 · 192–207 | Terra M20TEAM (3699); Terra M20iTEAM (5799); Terra M21eTEAM 1X (5999); Terra M22 TEAM 1X (5999); Terra M30TEAM (2999); Terra M30TEAM 1X (2999); Terra M31eTEAM 1X (4199); Terra M35TEAM (3999) |
| Urrun [6e46cd6a] | emtb | S · M · L · XL | 625 · 630 · 639 · 657 | 410 · 430 · 455 · 475 | 150–175 · 160–185 · 170–195 · 180–205 | Urrun 10 (4199); Urrun 20 (3599); Urrun 30 (2899) |
| Wild LT [13653a71] | emtb | S · M · L · XL | 624.5 · 633.5 · 642.5 · 651.4 | 436.2 · 461.2 · 486.2 · 511.2 | 150–175 · 160–185 · 170–195 · 180–205 | Wild LT H-TEAM (7999); Wild LT H-TEAM Mullet (7999); Wild LT H10 (6999); Wild LT H10 Mullet (6999); Wild LT H20 (5599); Wild LT H20 Mullet (5599) |
| Wild LT [14f8a25f] | emtb | S · M · L · XL | 624.5 · 633.5 · 642.5 · 651.5 | 436.2 · 461.2 · 486.2 · 511.2 | 150–175 · 160–185 · 170–195 · 180–205 | Wild LT M-LTD RS (13499); Wild LT M-LTD RS Mullet (12699); Wild LT M-TEAM RS (9999); Wild LT M-TEAM RS Mullet (9999); Wild LT M10 (8499); Wild LT M10 Mullet (8499); Wild LT M20 (6999); Wild LT M20 Mullet (6999) |

<details><summary>Productos en alcance sin datos</summary>

- https://www.orbea.com/es-es/orca-omx — sin tabla de geometría en la página
- https://www.orbea.com/es-es/orca-omr — sin tabla de geometría en la página
- https://www.orbea.com/es-es/terra-omr — sin tabla de geometría en la página
- https://www.orbea.com/es-es/oiz-omx — sin tabla de geometría en la página
- https://www.orbea.com/es-es/occam-omr-sl — sin tabla de geometría en la página
- https://www.orbea.com/es-es/occam-omr-lt-fox-x-2pos-kashim — sin tabla de geometría en la página
- https://www.orbea.com/es-es/rallon-enduro — sin tabla de geometría en la página
- https://www.orbea.com/es-es/rise-sl-m-ltd — sin tabla de geometría en la página
- https://www.orbea.com/es-es/rise-sl-m10 — sin tabla de geometría en la página
- https://www.orbea.com/es-es/rise-sl-m20 — sin tabla de geometría en la página
- https://www.orbea.com/es-es/rise-sl-h10 — sin tabla de geometría en la página
- https://www.orbea.com/es-es/rise-lt-m-team — sin tabla de geometría en la página
- https://www.orbea.com/es-es/rise-lt-m10 — sin tabla de geometría en la página
- https://www.orbea.com/es-es/rise-lt-m20 — sin tabla de geometría en la página
- https://www.orbea.com/es-es/rise-lt-h10 — sin tabla de geometría en la página
- https://www.orbea.com/es-es/rise-lt-h20 — sin tabla de geometría en la página

</details>


## BH — con avisos

Diff con bikes.csv: **+355** tallas nuevas, **−0** que desaparecen, **~0** con cambios. Productos candidatos: 121. Métodos: html. Descargas: {'httpx': 0, 'browser': 0, 'cache': 95, 'challenges': 0}.

| Familia | Cat. | Tallas | Stack | Reach | Altura (cm) | Modelos (precio €) |
|---|---|---|---|---|---|---|
| AEROLIGHT [0b340471] | carretera | XS · SM · MD · LA · XL | 510 · 523 · 539 · 554 · 576 | 368 · 375 · 382 · 390 · 399 | — · — · — · — · — | AEROLIGHT 6.0 (s/p); AEROLIGHT 7.0 (s/p); AEROLIGHT 8.0 (s/p); AEROLIGHT 9.0 (s/p) |
| ATOM 29 [16d4433b] | emtb | XS · SM · MD · LA | 657 · 657 · 662 · 676 | 399 · 409 · 427 · 445 | — · — · — · — | ATOM 29 (2099.9) |
| ATOM+ SL PRO [465d1aa9] | emtb | SM · MD · LA | 660 · 670 · 679 | 430 · 450 · 470 | — · — · — | ATOM+ SL PRO (2999.9) |
| CORE 29 [d8e866f7] | emtb | SM · MD · LA | 624 · 633 · 663 | 408 · 422 · 444 | — · — · — | CORE 29 (3999.9); CORE 29 PRO (2999.9) |
| EXPERT [1349703b] | mtb | XS · SM · MD · LA | 600.6 · 619.2 · 619.2 · 628 | 380 · 397 · 423 · 435 | — · — · — · — | EXPERT 4.0 (1049.9); EXPERT 4.5 (949.9); EXPERT 5.0 (949.9); EXPERT 5.5 (949.9) |
| GRAVELX [4b2d612f] | gravel | XS · SM · MD · LA · XL | 510 · 540 · 556 · 577 · 598 | 366 · 370 · 377 · 387 · 398 | — · — · — · — · — | GRAVELX 3.5 R (2499.9); GRAVELX 5.5 R (2499.9); GRAVELX 6.5 R (2499.9) |
| GRAVELX [beb17734] | gravel | XS · SM · MD · LA · XL | 529 · 538 · 561 · 582 · 601 | 361 · 373 · 377 · 387 · 398 | — · — · — · — · — | GRAVELX 1.0 (2499.9); GRAVELX 1.5 (2499.9); GRAVELX 1.8 (2499.9) |
| GRAVELX [f08a4916] | gravel | SM · MD · LA · XL | 540 · 556 · 577 · 598 | 370 · 377 · 387 · 398 | — · — · — · — | GRAVELX 3.0 AT (2499.9); GRAVELX 5.0 AT (2499.9); GRAVELX 6.0 AT (2499.9) |
| LYNX RACE 6.0 [65b38018] | mtb | MD · LA · XL | 588.9 · 598.1 · 616.5 | 445 · 470 · 490 | — · — · — | LYNX RACE 6.0 (s/p) |
| LYNX RACE [3984b9a4] | mtb | SM · MD · LA · XL | 575 · 580.1 · 595.2 · 610.2 | 410 · 436 · 456 · 472 | — · — · — · — | LYNX RACE 3.0 (s/p); LYNX RACE 4.0 (s/p) |
| LYNX RACE [645cbcdb] | mtb | SM · MD · LA · XL | 588.9 · 588.9 · 598.1 · 616.5 | 420 · 445 · 470 · 490 | — · — · — · — | LYNX RACE 6.5 (s/p); LYNX RACE 7.0 (s/p); LYNX RACE 8.0 (s/p) |
| LYNX SLS [00fd9843] | mtb | SM · MD · LA · XL | 590.6 · 590.6 · 609 · 618.2 | 420 · 445 · 470 · 490 | — · — · — · — | LYNX SLS 6.0 (4699.9); LYNX SLS 6.5 (4199.9); LYNX SLS 7.0 (4199.9); LYNX SLS 8.0 (4199.9); LYNX SLS 8.5 (4199.9); LYNX SLS 9.0 (4199.9); LYNX SLS 9.5 (4199.9) |
| LYNX TRAIL [8acd88df] | mtb | SM · MD · LA · XL | 608.2 · 610.1 · 619.8 · 633.8 | 430 · 455 · 475 · 490 | — · — · — · — | LYNX TRAIL 9.0 (s/p); LYNX TRAIL 9.5 (s/p) |
| RS1 [f1fb3721] | carretera | XS · SM · MD · LA · XL | 526 · 544 · 557 · 583 · 597 | 370 · 375 · 380 · 388 · 393 | — · — · — · — · — | RS1 3.5 (3299.9); RS1 4.0 (2799.9); RS1 4.2 (2799.9); RS1 4.5 (2799.9); RS1 5.0 (2799.9); RS1 5.5 (2799.9) |
| SL1 [2406382a] | carretera | XS · SM · MD · LA · XL · XXL | 517 · 523 · 549 · 583 · 594 · 605 | 382 · 383 · 384 · 386 · 396 · 403 | — · — · — · — · — · — | SL1 3.5 (s/p); SL1 4.0 (s/p); SL1 4.5 (s/p) |
| SPIKE [53307eee] | mtb | SM · MD · LA · XL | 614.6 · 623.9 · 633.2 · 642.5 | 387.1 · 395.8 · 406.4 · 423.6 | — · — · — · — | SPIKE 2.0 (649.9); SPIKE 2.5 (549.9); SPIKE 3.0 (549.9) |
| ULTIMATE 6.0 [f3f5d7c5] | mtb | SM · LA | 605 · 624 | 410 · 455 | — · — | ULTIMATE 6.0 (1899.9) |
| ULTIMATE [64987fa5] | mtb | SM · MD · LA · XL | 605 · 610 · 624 · 638 | 410 · 435 · 455 · 470 | — · — · — · — | ULTIMATE 6.5 (1799.9); ULTIMATE 7.0 (1799.9); ULTIMATE 7.5 (1799.9) |
| ULTRALIGHT [8a098655] | carretera | XS · SM · MD · LA · XL | 513 · 526 · 542 · 557 · 581 | 367 · 374 · 381 · 389 · 397 | — · — · — · — · — | ULTRALIGHT 6.0 (s/p); ULTRALIGHT 7.0 (s/p); ULTRALIGHT 8.0 (s/p); ULTRALIGHT 9.0 (s/p) |
| iLYNX+ DL ENDURO 9.0 [d4c88027] | emtb | SM · MD · LA · XL | 625 · 634 · 642 · 651 | 455 · 477 · 500 · 520 | — · — · — · — | iLYNX+ DL ENDURO 9.0 (5999.9) |
| iLYNX+ DL ENDURO 9.1 [c58ac105] | emtb | SM · MD · LA · XL | 629 · 638 · 647 · 655 | 450 · 472 · 495 · 515 | — · — · — · — | iLYNX+ DL ENDURO 9.1 (5399.9) |
| iLYNX+ DL ENDURO CARBON 9.5 [468d6623] | emtb | SM · MD · LA · XL | 625 · 634 · 642 · 651 | 450 · 477 · 500 · 520 | — · — · — · — | iLYNX+ DL ENDURO CARBON 9.5 (5399.9) |
| iLYNX+ DL ENDURO CARBON [c842a880] | emtb | SM · MD · LA · XL | 629 · 638 · 647 · 655 | 445 · 472 · 495 · 515 | — · — · — · — | iLYNX+ DL ENDURO CARBON 9.6 (5399.9); iLYNX+ DL ENDURO CARBON 9.7 (5399.9); iLYNX+ DL ENDURO CARBON 9.8 (5399.9) |
| iLYNX+ DL TRAIL 7.9 [098aa063] | emtb | SM · MD · LA · XL | 624 · 628 · 642 · 651 | 457 · 477 · 502 · 527 | — · — · — · — | iLYNX+ DL TRAIL 7.9 (5399.9) |
| iLYNX+ DL TRAIL 8.0 [e16911cd] | emtb | SM · MD · LA · XL | 629 · 634 · 648 · 657 | 450 · 470 · 495 · 520 | — · — · — · — | iLYNX+ DL TRAIL 8.0 (5399.9) |
| iLYNX+ DL TRAIL 8.1 [c7bc936f] | emtb | SM · MD · LA · XL | 631 · 635 · 649 · 658 | 448 · 468 · 493 · 518 | — · — · — · — | iLYNX+ DL TRAIL 8.1 (5399.9) |
| iLYNX+ DL TRAIL CARBON [94b96eea] | emtb | SM · MD · LA · XL | 620 · 634 · 648 · 657 | 440 · 470 · 495 · 520 | — · — · — · — | iLYNX+ DL TRAIL CARBON 8.6 (5399.9); iLYNX+ DL TRAIL CARBON 8.7 (5399.9); iLYNX+ DL TRAIL CARBON 8.8 (5399.9) |
| iLYNX+ NX ENDURO CARBON 9.8 [88d2d1d3] | emtb | SM · MD · LA | 613 · 621 · 628 | 432 · 448 · 468 | — · — · — | iLYNX+ NX ENDURO CARBON 9.8 (4999.9) |
| iLYNX+ [0c36948a] | emtb | SM · MD · LA · XL | 613 · 621 · 628 · 636 | 432 · 448 · 468 · 485 | — · — · — · — | iLYNX+ NX ENDURO 9.0 (5499.9); iLYNX+ NX ENDURO 9.1 (4999.9); iLYNX+ NX ENDURO CARBON 9.6 (4999.9); iLYNX+ NX ENDURO CARBON 9.7 (4999.9); iLYNX+ SL ENDURO CARBON 9.6 (5999.9); iLYNX+ SL ENDURO CARBON 9.7 (4999.9); iLYNX+ SL ENDURO CARBON 9.8 (4999.9) |
| iLYNX+ [15accf19] | emtb | SM · MD · LA · XL | 600 · 610 · 618 · 632 | 449 · 466 · 485 · 502 | — · — · — · — | iLYNX+ NX TRAIL 7.9 (4999.9); iLYNX+ NX TRAIL 8.0 (4999.9); iLYNX+ NX TRAIL CARBON 8.4 (4999.9); iLYNX+ NX TRAIL CARBON 8.5 (4999.9); iLYNX+ NX TRAIL CARBON 8.6 (4999.9); iLYNX+ SL TRAIL CARBON 8.6 (4999.9); iLYNX+ SL TRAIL CARBON 8.7 (4999.9); iLYNX+ SL TRAIL CARBON 8.8 (4999.9) |

<details><summary>Productos en alcance sin datos</summary>

- https://www.bhbikes.com/es_ES/bicicletas/carretera/gravel/gravelx-2-5-r-lg257 — sin tabla de geometría en la página
- https://www.bhbikes.com/es_ES/bicicletas/carretera/gravel/gravelx-2-0-at-lg207 — sin tabla de geometría en la página

</details>

Descartados: fuera de alcance (URL/tipo): 34, duplicado (mismo modelo): 1

## Mondraker — con avisos

Diff con bikes.csv: **+210** tallas nuevas, **−0** que desaparecen, **~0** con cambios. Productos candidatos: 47. Métodos: html. Descargas: {'httpx': 0, 'browser': 0, 'cache': 48, 'challenges': 0}.

| Familia | Cat. | Tallas | Stack | Reach | Altura (cm) | Modelos (precio €) |
|---|---|---|---|---|---|---|
| ANARK [fb95ae28] | mtb | S · M · ML · L · XL | 644 · 644 · 653 · 662 · 671 | 440 · 460 · 480 · 500 · 520 | — · — · — · — · — | ANARK R (3999); ANARK XR (4999) |
| ARID [4b576448] | gravel | S · M · M/L · L · XL | 548 · 572 · 591 · 619 · 642 | 363 · 386 · 411 · 423 · 446 | — · — · — · — · — | ARID CARBON R (4499); ARID CARBON RR (6499); ARID CARBON RR SL (8999); ARID CARBON RS (5399); ARID CARBON S AXS (3499); ARID CARBON S GRX (2999); ARID R (2699); ARID S (2299) |
| CRAFTY CARBON [f1fe0ea2] | emtb | S [Std/Low] · M [Std/Low] · M/L [Std/Low] · L [Std/Low] · XL [Std/Low] | 638 · 638 · 647 · 656 · 665 | 445 · 460 · 480 · 500 · 520 | — · — · — · — · — | CRAFTY CARBON R (7499); CRAFTY CARBON RR (8499); CRAFTY CARBON RR S (9999); CRAFTY CARBON S (6499) |
| DUNE [3cc29da5] | emtb | S · M · L · XL | 621 · 630 · 648 · 658 | 445 · 465 · 485 · 505 | — · — · — · — | DUNE R (7999); DUNE RR (9999) |
| F-PODIUM [522da72b] | mtb | S · M · L · XL | 594.6 · 594.6 · 608.3 · 622.1 | 430 · 455 · 480 · 505 | — · — · — · — | F-PODIUM R (5999); F-PODIUM RR (7999); F-PODIUM RR SL (12999) |
| FOXY CARBON [a7a4e264] | mtb | S [Std/Low] · M [Std/Low] · L [Std/Low] · XL [Std/Low] | 615 · 623 · 637 · 651 | 445 · 465 · 485 · 505 | — · — · — · — | FOXY CARBON R (6399); FOXY CARBON RR (8499) |
| LEVEL [f3068e52] | emtb | S · M · M/L · L · XL | 640 · 649 · 658 · 667 · 676 | 440 · 460 · 480 · 500 · 520 | — · — · — · — · — | LEVEL R (6999); LEVEL RR (8499); LEVEL XR (9999) |
| NEAT RR SL [963170e1] | emtb | S · M · L · XL | 626 · 626 · 642 · 650 | 450 · 470 · 495 · 515 | — · — · — · — | NEAT RR SL (11999) |
| NEAT [3389ee81] | emtb | S · M · L · XL | 626 · 626 · 642 · 650 | 450 · 470 · 495 · 515 | — · — · — · — | NEAT R (8499); NEAT RR (9999) |
| PODIUM [aa1246bc] | mtb | S · M · L · XL | 598 · 602 · 611 · 625 | 425 · 444 · 463 · 477 | — · — · — · — | PODIUM RR (6499); PODIUM RR SL (10499); PODIUM S (3299) |
| PRIME [4883fa58] | emtb | S · M · M/L · L · XL | 669.1 · 669.1 · 673.7 · 682.9 · 692.1 | 405 · 425 · 450 · 475 · 500 | — · — · — · — · — | PRIME R (4599); PRIME S (4199) |
| RAZE CARBON [3ab463c7] | mtb | S · M · L · XL | 608 · 617 · 631 · 645 | 455 · 475 · 495 · 515 | — · — · — · — | RAZE CARBON R (5799); RAZE CARBON RR (7299); RAZE CARBON RR SL (9299) |
| RAZE [891e1af8] | mtb | S · M · L · XL | 623 · 623 · 641 · 641 | 450 · 470 · 490 · 510 | — · — · — · — | RAZE (2999); RAZE R (3999) |
| SCREE [736fd92c] | emtb | S · M · ML · L · XL | 644.6 · 644.6 · 649.2 · 658.3 · 667.4 | 440 · 460 · 480 · 500 · 520 | — · — · — · — · — | SCREE R (5999); SCREE RR (6999); SCREE S 720 (4999) |
| SLY [0700ebe6] | emtb | S · M · M/L · L · XL | 633 · 633 · 642 · 651 · 660 | 440 · 460 · 480 · 500 · 520 | — · — · — · — · — | SLY R (5999); SLY RR (6999) |
| SUMMUM RR [7957f8a0] | mtb | M · L · XL | 642.6 · 642.6 · 642.6 | 450 · 475 · 505 | — · — · — | SUMMUM RR (8499) |
| ZENDIT RR [fdeeffad] | emtb | S · M · M/L · L · XL | 631 · 631 · 640 · 649 · 658 | 440 · 460 · 480 · 500 · 520 | — · — · — · — · — | ZENDIT RR (8499); ZENDIT RR S (10499) |
| ZENDIT XR [a1f371e8] | emtb | S · M · M/L · L · XL | 631 · 631 · 640 · 649 · 658 | 440 · 460 · 480 · 500 · 520 | — · — · — · — · — | ZENDIT XR (12499) |

<details><summary>Tallas rechazadas por la validación</summary>

- SUMMUM R M: reach decrece al subir de talla (XL: 510 < 514)
- SUMMUM R M: reach decrece al subir de talla (XL: 510 < 514)
- SUMMUM R M: reach decrece al subir de talla (XL: 510 < 514)
- SUMMUM R L: reach decrece al subir de talla (XL: 510 < 514)
- SUMMUM R L: reach decrece al subir de talla (XL: 510 < 514)
- SUMMUM R L: reach decrece al subir de talla (XL: 510 < 514)
- SUMMUM R L: reach decrece al subir de talla (XL: 510 < 514)
- SUMMUM R L: reach decrece al subir de talla (XL: 510 < 514)
- SUMMUM R L: reach decrece al subir de talla (XL: 510 < 514)
- SUMMUM R XL: reach decrece al subir de talla (XL: 510 < 514)
- SUMMUM R XL: reach decrece al subir de talla (XL: 510 < 514)
- SUMMUM R XL: reach decrece al subir de talla (XL: 510 < 514)
- SUMMUM R XL: reach decrece al subir de talla (XL: 510 < 514)
- SUMMUM R XL: reach decrece al subir de talla (XL: 510 < 514)

</details>

<details><summary>Avisos</summary>

- SUMMUM RR: varias posiciones de geometría por talla: se usa la primera publicada
- SUMMUM R: varias posiciones de geometría por talla: se usa la primera publicada
- SUMMUM R: columnas de talla reordenadas
- ANARK XR: bloques de tallas repetidos (p. ej. posición alta/baja): se usa el primero
- ANARK R: bloques de tallas repetidos (p. ej. posición alta/baja): se usa el primero
- ZENDIT XR: bloques de tallas repetidos (p. ej. posición alta/baja): se usa el primero
- ZENDIT RR S: bloques de tallas repetidos (p. ej. posición alta/baja): se usa el primero
- ZENDIT RR: bloques de tallas repetidos (p. ej. posición alta/baja): se usa el primero

</details>


## MMR — OK

Diff con bikes.csv: **+236** tallas nuevas, **−0** que desaparecen, **~0** con cambios. Productos candidatos: 58. Métodos: html. Descargas: {'httpx': 0, 'browser': 0, 'cache': 66, 'challenges': 0}.

| Familia | Cat. | Tallas | Stack | Reach | Altura (cm) | Modelos (precio €) |
|---|---|---|---|---|---|---|
| Adrenaline SLR [11d07a7b] | carretera | S · M · L | 526 · 546 · 566 | 379 · 387 · 395 | 164–174 · 172–182 · 180–190 | Adrenaline SLR (9999) |
| Adrenaline [19a38ac1] | carretera | XS · S · M · L · XL | 501 · 526 · 546 · 566 · 591 | 370 · 379 · 387 · 395 · 405 | ≤–166 · 164–176 · 172–182 · 180–190 · 188–∞ | Adrenaline 00 (4099); Adrenaline 00 SC45 (4899); Adrenaline 10 (4699); Adrenaline 30 (3399); Adrenaline 30 PLUS (3999); Adrenaline 50 (2599) |
| Aelion 00 [3dc6fdad] | carretera | XS · S · M · L · XL | 501 · 526 · 546 · 566 · 591 | 370 · 379 · 387 · 395 · 405 | ≤–166 · 164–174 · 172–182 · 180–190 · 188–∞ | Adrenaline SL 00 (8749); Adrenaline SL 10 (6199); Adrenaline SL Team (5399); Aelion 00 (5199); Aelion 10 (5499); Aelion 30 (4399); Aelion 50 (2699); Aelion SL 00 (9499); Aelion SL 10 (6399); Aelion SL Team (5499); Aelion SLR (13499) |
| Akira 00 [79d15a9c] | mtb | XS · S · M | 591 · 591 · 605 | 369 · 381 · 396 | ≤–157 · 156–170 · 169–∞ | Akira 00 (949) |
| Grand Tour [d8ae9cf0] | carretera | S · M · L · XL | 545 · 569 · 592 · 616 | 370 · 380 · 390 · 400 | ≤–170 · 169–175 · 173–184 · 183–∞ | Grand Tour 00 (3999); Grand Tour 10 (3799); Grand Tour 30 (2699) |
| Grip [ebbc7999] | carretera | XS · S · M · L · XL | 494 · 525 · 555 · 580 · 609 | 375 · 375 · 383 · 390 · 400 | 155–162 · 160–171 · 170–176 · 175–183 · 182–∞ | Grip 00 (1899); Grip 10 (1499) |
| Kenta SL 00 [9bf78c66] | mtb | S · M · L | 586 · 596 · 611 | 430 · 455 · 480 | ≤–172 · 170–182 · 180–∞ | Kenta SL 00 (9999) |
| Kenta SL 10 [ac998778] | mtb | S · M · L | 590 · 600 · 615 | 425 · 450 · 475 | ≤–172 · 170–182 · 180–∞ | Kenta SL 10 (8199) |
| Kenta [9c866ab7] | mtb | S · M · L | 590 · 600 · 615 | 425 · 450 · 475 | ≤–172 · 170–182 · 180–∞ | Kenta 00 (5999); Kenta 10 (5599); Kenta 30 (3799); Kenta 50 (2999) |
| Lyth [12f7b8c4] | emtb | S · M · L | 620 · 635 · 655 | 445 · 475 · 510 | ≤–172 · 170–182 · 180–∞ | Lyth 00 (9499); Lyth 00 Plus (10999); Lyth 10 (7499); Lyth 30 (6199) |
| Q 00 Plus [c3cc08bf] | emtb | S · M · L | 615 · 630 · 645 | 435 · 460 · 485 | ≤–172 · 170–182 · 180–∞ | Q 00 Plus (9699) |
| Q [b8db1c1d] | emtb | S · M · L | 615 · 630 · 645 | 435 · 460 · 485 | ≤–172 · 170–182 · 180–∞ | Q 00 (8999); Q 10 (7199); Q 30 (6499); Q 50 (5999) |
| Rakish SL 00 [1f215d98] | mtb | S · M · L | 605 · 614 · 623 | 407 · 428 · 445 | ≤–164 · 163–177 · 176–186 | Rakish SL 00 (5499) |
| Rakish [77556020] | mtb | S · M · L · XL | 605 · 614 · 623 · 633 | 407 · 428 · 445 · 465 | ≤–164 · 163–177 · 176–186 · 185–∞ | Rakish 00 (2549); Rakish 10 (2199); Rakish 30 (1999) |
| Simun [030d02ad] | gravel | XS · S · M · L | 515 · 525 · 550 · 575 | 370 · 380 · 390 · 400 | ≤–165 · 164–175 · 173–180 · 178–195 | SIMUN 30 (4999); SIMUN 50 (3599); SIMUN 70 (2599); Simun 00 (6999); Simun 00 Plus (8499); Simun 10 (5999) |
| Woki [e2b47026] | mtb | S · M · L · XL | 610 · 624 · 633 · 643 | 381 · 390 · 396 · 407 | ≤–164 · 163–177 · 176–186 · 185–∞ | Woki 00 (1149); Woki 10 (1099); Woki 30 (1049) |
| X-Grip [f642a9bc] | gravel | XS · S · M · L · XL | 520 · 538 · 565 · 589 · 622 | 365 · 365 · 375 · 385 · 396 | 155–162 · 160–171 · 169–177 · 175–184 · 183–∞ | X-Grip 00 (1999); X-Grip 10 (1699); X-Grip 30 (1299) |
| X-Tour [1b2e896c] | gravel | S · M · L · XL | 545 · 569 · 592 · 616 | 370 · 380 · 390 · 400 | ≤–170 · 169–175 · 173–184 · 183–∞ | X-Tour 00 (3199); X-Tour 10 (2599) |
| Zen 00 [b8e04c9c] | mtb | S · M · L · XL | 605 · 614 · 627 · 635 | 402 · 421 · 438 · 456 | ≤–164 · 163–177 · 176–186 · 185–∞ | Zen 00 (1649) |


## Megamo — con avisos

**Nota:** Altura de la FIT GUIDE (X-SMALL…X-LARGE) con equivalencia aprobada por el usuario. Reason/Ryal (MY27) solo publican el dibujo SVG sin valores.

Diff con bikes.csv: **+373** tallas nuevas, **−0** que desaparecen, **~0** con cambios. Productos candidatos: 130. Métodos: html. Descargas: {'httpx': 0, 'browser': 0, 'cache': 133, 'challenges': 0}.

| Familia | Cat. | Tallas | Stack | Reach | Altura (cm) | Modelos (precio €) |
|---|---|---|---|---|---|---|
| DX3 [1531cea1] | mtb | XS · S | 565 · 570 | 363 · 393 | — · — | DX3 (449) |
| FACTORY [48adcd9f] | mtb | S · M · L · XL | 595 · 600 · 614 · 624 | 404 · 429 · 449 · 471 | — · — · — · — | FACTORY 15 (2299); FACTORY 30 (1999) |
| FLAME AL 03 [cc9472ce] | emtb | S · M · L | 620 · 629 · 647 | 435 · 453 · 484 | ≤–170 · 170–180 · 180–∞ | FLAME AL 03 (6999); FLAME AL 05 (6099); FLAME AL 08 (5499); FLAME AL 10 (4999); REACH FS 05 (5699); REACH FS 10 (4999) |
| FLAME CRB [d3a0bef3] | emtb | S · M · L | 613 · 621 · 640 | 435 · 460 · 490 | — · — · — | FLAME CRB 00 (12499); FLAME CRB 01 (11999); FLAME CRB 03 (7999); FLAME CRB 07 (6499); FLAME CRB 10 (5699) |
| JAKAR BASE [676eb97b] | gravel | ONE SIZE | 527 | 361 | — | JAKAR BASE (999) |
| JAKAR [3e65aa58] | gravel | XS · S · M · L · XL | 529 · 550 · 570 · 600 · 632 | 347 · 358 · 376 · 392 · 407 | — · — · — · — · — | JAKAR 20 (1699); JAKAR 30 (1399); JAKAR 30 EQUIPPED (1899); JAKAR 30 FLAT-BAR (999); JAKAR FLAT-BAR (1299) |
| KU2 [1b3f0925] | mtb | 26" | 540 | 363 | — | KU2 (399) |
| KU4 [5fa96f83] | mtb | 24" | 493 | 362 | — | KU4 (399) |
| MEGAMO SILK [7603a225] | gravel | XS · S · M · L · XL | 516 · 535 · 557 · 581 · 605 | 372 · 382 · 395 · 408 · 416 | — · — · — · — · — | MEGAMO SILK 00 SLR (8999); MEGAMO SILK 01 SLR (5999); MEGAMO SILK 02 (5399); MEGAMO SILK 03 SLR (4999); MEGAMO SILK 04 (3999); MEGAMO SILK 04 SLR (3999); MEGAMO SILK 05 SLR (3999); MEGAMO SILK 06 (3299); MEGAMO SILK 07 (2999) |
| NATURAL [156e14e5] | mtb | S · M · L · XL | 600 · 609 · 619 · 633 | 397 · 419 · 442 · 462 | — · — · — · — | NATURAL 30 (849); NATURAL 40 (699); NATURAL 60 (499); NATURAL ELITE 15 (999) |
| NEVO 30 [2e39a819] | carretera | XS · S · M · L · XL | 510 · 529 · 549 · 568 · 596 | 368 · 378 · 387 · 397 · 403 | — · — · — · — · — | NEVO 30 (1799) |
| PULSE [7863ab96] | carretera | XS · S · M · L · XL | 503 · 518 · 538 · 557 · 581 | 375 · 380 · 385 · 390 · 395 | ≤–165 · 165–172 · 170–180 · 180–188 · 188–∞ | PULSE 03 (6799); PULSE 04 (5699); PULSE 05 (4199); PULSE 07 (4999); PULSE 20 (2699) |
| PULSE [ab1816e5] | carretera | XS · S · M · L · XL | 503 · 518 · 538 · 557 · 581 | 373 · 378 · 383 · 392 · 402 | — · — · — · — · — | PULSE 00 SLR (9999); PULSE 01 SLR (8999); PULSE 02 SLR (6499); PULSE 03 CW LTD (5999); PULSE 04 SLR (5499); PULSE 05 CW (4999); PULSE 07 SLR (4999); PULSE 15 (3499); PULSE 15 CW (4499) |
| RAISE [3b47eb2b] | carretera | XS · S · M · L · XL | 506 · 521 · 534 · 550 · 576 | 376 · 383 · 384 · 396 · 402 | ≤–165 · 165–172 · 170–180 · 180–188 · 188–∞ | RAISE 03 (6799); RAISE 04 (5699); RAISE 05 (4199); RAISE 07 (4999); RAISE ENVE EDITION (11999) |
| RAISE [8bfce48e] | carretera | XS · S · M · L · XL | 506 · 521 · 534 · 550 · 576 | 376 · 383 · 384 · 396 · 402 | ≤–165 · 165–172 · 170–180 · 180–188 · 188–∞ | RAISE 00 SLR (9999); RAISE 01 SLR (8499); RAISE 02 SLR (6499); RAISE 03 CW LTD (5999); RAISE 04 SLR (5499); RAISE 05 CW (4999); RAISE 07 CW (4699); RAISE 15 (3499); RAISE 15 CW (4399); RAISE 20 (2699) |
| REACH HT [55376043] | emtb | S · M · L · XL | 643 · 657 · 670 · 727 | 401 · 432 · 448 · 452 | ≤–163 · 163–176 · 176–185 · 185–∞ | REACH HT 05 (4199); REACH HT 05 EQUIPPED (4399); REACH HT 10 (3799); REACH HT 10 EQUIPPED (3999); REACH HT 20 (3199); REACH HT 20 EQUIPPED (3299) |
| REACH LOW [07362e21] | emtb | S · M · L | 689 · 689 · 708 | 407 · 417 · 432 | ≤–163 · 163–176 · 175–∞ | REACH LOW 05 EQUIPPED (4399); REACH LOW 10 EQUIPPED (3999); REACH LOW 20 EQUIPPED (3299) |
| TRACK [9490ed4a] | mtb | S · M · L · XL | 599 · 599 · 613 · 630 | 410 · 435 · 460 · 485 | ≤–169 · 169–180 · 180–185 · 185–∞ | TRACK 00 SLR (9999); TRACK 01 SLR (8999); TRACK 02 SLR (6999); TRACK 03 SLR RACE (6999); TRACK 04 CW (5999); TRACK 08 (3999); TRACK 10 (3699) |
| WEST [edce1209] | gravel | XS · S · M · L · XL | 548 · 563 · 576 · 600 · 625 | 378 · 391 · 400 · 405 · 415 | — · — · — · — · — | WEST 01 (5999); WEST 02 (5399); WEST 03 (4799); WEST 05 (2999); WEST 10 (2499); WEST 15 (2399) |

<details><summary>Productos en alcance sin datos</summary>

- https://www.megamo.com/es/e-bike/e-full-suspension/reason/reason-crb-00-(27) — transcripción sin stack/reach
- https://www.megamo.com/es/e-bike/e-full-suspension/reason/reason-crb-01-(27) — transcripción sin stack/reach
- https://www.megamo.com/es/e-bike/e-full-suspension/reason/reason-crb-02-(27) — transcripción sin stack/reach
- https://www.megamo.com/es/e-bike/e-full-suspension/reason/reason-crb-03-axs-(27) — transcripción sin stack/reach
- https://www.megamo.com/es/e-bike/e-full-suspension/reason/reason-crb-03-(27) — transcripción sin stack/reach
- https://www.megamo.com/es/e-bike/e-full-suspension/reason/reason-crb-05-(27) — transcripción sin stack/reach
- https://www.megamo.com/es/e-bike/e-full-suspension/reason/reason-crb-07-(27) — transcripción sin stack/reach
- https://www.megamo.com/es/e-bike/e-full-suspension/reason/reason-air-crb-00-(27) — transcripción sin stack/reach
- https://www.megamo.com/es/e-bike/e-full-suspension/reason/reason-air-crb-03-axs-(27) — transcripción sin stack/reach
- https://www.megamo.com/es/e-bike/e-full-suspension/reason/reason-air-crb-05-(27) — transcripción sin stack/reach
- https://www.megamo.com/es/e-bike/e-full-suspension/reason/reason-air-crb-07-(27) — transcripción sin stack/reach
- https://www.megamo.com/es/e-bike/e-full-suspension/reason/reason-al-03-axs-(27) — transcripción sin stack/reach
- https://www.megamo.com/es/e-bike/e-full-suspension/reason/reason-al-03-(27) — transcripción sin stack/reach
- https://www.megamo.com/es/e-bike/e-full-suspension/reason/reason-al-05-(27) — transcripción sin stack/reach
- https://www.megamo.com/es/e-bike/e-full-suspension/reason/reason-al-07-(27) — transcripción sin stack/reach
- https://www.megamo.com/es/e-bike/e-full-suspension/reason/reason-air-al-05-(27) — transcripción sin stack/reach
- https://www.megamo.com/es/e-bike/e-full-suspension/reason/reason-air-al-07-(27) — transcripción sin stack/reach
- https://www.megamo.com/es/e-bike/e-full-suspension/ryal/ryal-03-axs-(27) — transcripción sin stack/reach
- https://www.megamo.com/es/e-bike/e-full-suspension/ryal/ryal-05-(27) — transcripción sin stack/reach
- https://www.megamo.com/es/e-bike/e-full-suspension/ryal/ryal-08-(27) — transcripción sin stack/reach
- https://www.megamo.com/es/e-bike/e-full-suspension/ryal/ryal-10-(27) — transcripción sin stack/reach
- https://www.megamo.com/es/e-bike/e-full-suspension/flame-crb/flame-crb-05-(26) — sin tabla de geometría en la página

</details>

Descartados: fuera de alcance (URL/tipo): 2, año de modelo anterior: 19

## Berria — con avisos

Diff con bikes.csv: **+156** tallas nuevas, **−0** que desaparecen, **~0** con cambios. Productos candidatos: 35. Métodos: html. Descargas: {'httpx': 0, 'browser': 0, 'cache': 45, 'challenges': 0}.

| Familia | Cat. | Tallas | Stack | Reach | Altura (cm) | Modelos (precio €) |
|---|---|---|---|---|---|---|
| ALLROAD ESSENTIAL GRX400 [3b4525e0] | gravel | XXS · XS · S · M · L · XL | 536.1 · 554.9 · 573.7 · 580.8 · 599.6 · 618.4 | 365 · 371.4 · 378.7 · 387.1 · 396.1 · 410.3 | ≤–150 · 150–160 · 160–170 · 170–180 · 180–190 · 190–∞ | ALLROAD ESSENTIAL GRX400 (1799) |
| ALLROAD GRX400 [41e83a67] | gravel | XXS · XS · S · M · L · XL | 536.1 · 554.9 · 573.7 · 580.8 · 599.6 · 618.4 | 365 · 371.4 · 378.7 · 387.1 · 396.1 · 410.3 | ≤–150 · 150–160 · 160–170 · 170–180 · 180–190 · 192–∞ | ALLROAD GRX400 (1599) |
| BELADOR [85d9066b] | carretera | 51 · 53 · 55 · 57 · 59 | 518 · 533 · 550 · 570 · 590 | 369 · 383 · 396 · 406 · 418 | 155–165 · 165–175 · 175–185 · 185–192 · 192–∞ | BELADOR BR DURA-ACE Di2 (6874+); BELADOR BR ULTEGRA Di2 (5099+); BELADOR ESSENTIAL 105 (1999); BELADOR ESSENTIAL 105 Di2 (2499); BELADOR ESSENTIAL 105 Di2 CW (3099); BELADOR PRO 105 Di2 (2999+); BELADOR PRO FORCE AXS PWM (3844+); BELADOR PRO RIVAL AXS PWM (3399+); BELADOR PRO ULTEGRA Di2 (3544+) |
| BRAVO ESSENTIAL [fc9ce81a] | mtb | XS · S · M | 599 · 610 · 624 | 397 · 430 · 448 | 150–165 · 160–175 · 175–185 | BRAVO ESSENTIAL E70 (1999); BRAVO ESSENTIAL S100 (1799) |
| MAKO BR [9402ccac] | mtb | S · M · L | 590 · 602 · 614 | 435 · 458 · 485 | 155–170 · 170–185 · 180–195 | MAKO BR X0 AXS (5469+); MAKO BR XX SL AXS FA (10169+) |
| MAKO [332adbc4] | mtb | S · M · L | 590 · 602 · 614 | 435 · 458 · 485 | 155–170 · 170–185 · 185–195 | MAKO ESSENTIAL E70 (3299); MAKO PRO EAGLE 90 (3879+) |
| NAII BR [9c6a071d] | gravel | XXS · XS · S · M · L · XL | 524 · 524.6 · 538.8 · 556.5 · 575.5 · 596.4 | 372 · 382 · 395 · 405 · 415 · 425 | 150–∞ · 150–160 · 160–170 · 170–180 · 180–190 · 190–∞ | NAII BR FORCE XPLR AXS PWM (4484+); NAII BR GRX800 Di2 (4184+); NAII BR RED XPLR AXS PWM (7134+); NAII BR RIVAL XPLR AXS PWM (3984+) |
| NAII X [f0f44782] | gravel | XXS · XS · S · M · L · XL | 524 · 534 · 548 · 565 · 585 · 606 | 372 · 382 · 392 · 403 · 412 · 422 | ≤–150 · 150–160 · 160–170 · 170–180 · 180–190 · 190–∞ | NAII X ESSENTIAL APEX MULLET (2499); NAII X ESSENTIAL GRX400 (2199); NAII X PRO APEX XPLR AXS (3224+); NAII X PRO GRX800 (2824+); NAII X PRO GRX800 Di2 (3824+); NAII X PRO RIVAL XPLR AXS PWM (3624+) |
| NEXXEN MAX [0f671138] | emtb | S · M · L | 626 · 635 · 644 | 440 · 460 · 485 | 155–170 · 170–185 · 180–195 | NEXXEN MAX ESSENTIAL E70 PSYLO (4299); NEXXEN MAX ESSENTIAL E70 ZEB (4799); NEXXEN MAX PRO E90 (5799) |
| NEXXEN [13d0472c] | emtb | S · M · L | 626 · 635 · 644 | 457 · 460 · 485 | 155–170 · 170–185 · 180–195 | NEXXEN ESSENTIAL E70 PSYLO (4499); NEXXEN ESSENTIAL E70 ZEB (4999); NEXXEN PRO E90 (5599+); NEXXEN PRO S1000 AXS (6099+) |

<details><summary>Tallas rechazadas por la validación</summary>

- BRAVO ESSENTIAL E70 L: falta stack
- BRAVO ESSENTIAL S100 L: falta stack

</details>

<details><summary>Productos en alcance sin datos</summary>

- https://berriabikes.com/en/products/belador-br-red-axs-pwm-2027 — sin tabla de geometría en la página

</details>


## Massi — con avisos

**Nota:** Geometría por visión (data/vision/massi/). Sin precio en la web.

Diff con bikes.csv: **+296** tallas nuevas, **−0** que desaparecen, **~0** con cambios. Productos candidatos: 82. Métodos: vision. Descargas: {'httpx': 0, 'browser': 0, 'cache': 85, 'challenges': 0}.

| Familia | Cat. | Tallas | Stack | Reach | Altura (cm) | Modelos (precio €) |
|---|---|---|---|---|---|---|
| MASSI ACROSS ALU [7900d5d9] | gravel | 48 · 50 · 52 · 54 · 56 · 58 | 535 · 554 · 565 · 583 · 602 · 621 | 372 · 378 · 387 · 391 · 395 · 400 | — · — · — · — · — · — | MASSI ACROSS ALU 105 2X11 (s/p); MASSI ACROSS ALU GRX 1X12 (s/p); MASSI ACROSS ALU GRX 2X10 (s/p) |
| MASSI ACROSS CARBON [4ce19769] | gravel | 48 · 50 · 52 · 54 · 56 · 58 | 535 · 554 · 567 · 582 · 600 · 624 | 356 · 366 · 372 · 378 · 386 · 400 | — · — · — · — · — · — | MASSI ACROSS CARBON 105 2X12 (s/p); MASSI ACROSS CARBON 105 DI2 2X12 (s/p); MASSI ACROSS CARBON 105 MIX 2X11 (s/p); MASSI ACROSS CARBON 105 MIX 2X12 (s/p); MASSI ACROSS CARBON GRX 1X12 (s/p); MASSI ACROSS CARBON GRX 2X10 (s/p); MASSI ACROSS CARBON RACE 105 DI2 2X12 (s/p); MASSI ACROSS CARBON RACE GRX 1X12 (s/p); MASSI ACROSS CARBON RACE GRX DI2 2X12 (s/p); MASSI ACROSS CARBON RACE ULTEGRA DI2 2X12 (s/p); MASSI ACROSS CARBON ULTEG.DI2 2X12 (s/p) |
| MASSI AIRE SL [8d7c7e59] | mtb | 538 · 557 · 586 | 587 · 596 · 606 | 403 · 419 · 446 | — · — · — | MASSI AIRE SL ADVANCED (s/p); MASSI AIRE SL COMP (s/p); MASSI AIRE SL COMP TR (s/p); MASSI AIRE SL ELITE (s/p); MASSI AIRE SL ELITE TR (s/p); MASSI AIRE SL ENDURANCE (s/p); MASSI AIRE SL EXPERT (s/p); MASSI AIRE SL PRO (s/p); MASSI AIRE SL PRO TR (s/p); MASSI AIRE SL TEAM TR (s/p); MASSI AIRE SL TECH (s/p) |
| MASSI AIRE SLR [a07fa2d8] | mtb | 550 · 574 · 610 | 600 · 613 · 615 | 410 · 434 · 468 | — · — · — | MASSI AIRE SLR EXPERT (s/p); MASSI AIRE SLR REPLICA (s/p); MASSI AIRE SLR TEAM (s/p) |
| MASSI ARROW 3 RACE [3399b408] | carretera | 47 · 50 · 54 · 56 · 58 | 519 · 535 · 564 · 590 · 604 | 371 · 377 · 388 · 395 · 406 | — · — · — · — · — | MASSI ARROW 3 RACE 105 DB (s/p); MASSI ARROW 3 RACE 105 DI2 DB (s/p); MASSI ARROW 3 RACE 105 DI2 DB X-TECH (s/p); MASSI ARROW 3 RACE DURA ACE DI2 DB (s/p); MASSI ARROW 3 RACE DURA ACE DI2 DB X-TECH (s/p); MASSI ARROW 3 RACE ULTEGRA DI2 DB (s/p); MASSI ARROW 3 RACE ULTEGRA DI2 DB X-TECH (s/p) |
| MASSI ARROW RACE [0798b8eb] | carretera | 48 · 51 · 54 · 57 · 60 | 523 · 535 · 545 · 561 · 586 | 371 · 376 · 382 · 392 · 399 | — · — · — · — · — | MASSI ARROW RACE 105 DB (s/p); MASSI ARROW RACE 105 DB X-TECH (s/p); MASSI ARROW RACE 105 DI2 DB (s/p); MASSI ARROW RACE 105 DI2 DB X-TECH (s/p); MASSI ARROW RACE DURA ACE DI2 DB (s/p); MASSI ARROW RACE DURA ACE DI2 DB X-TECH (s/p); MASSI ARROW RACE ULTEGRA DI2 DB (s/p); MASSI ARROW RACE ULTEGRA DI2 DB X-TECH (s/p) |
| MASSI CASTA [87d14893] | mtb | 537 · 570 · 578 · 602 | 573 · 577 · 582 · 587 | 397 · 416 · 435 · 445 | — · — · — · — | MASSI CASTA ADVANCED (s/p); MASSI CASTA ELITE (s/p); MASSI CASTA ENDURANCE (s/p); MASSI CASTA PRO (s/p); MASSI CASTA REPLICA (s/p) |
| MASSI CROSSBOW 4 [db005ecf] | carretera | S · M · L | 458 · 466 · 480 | 390 · 405 · 420 | — · — · — | MASSI CROSSBOW 4 105 DI2 XPRO (s/p); MASSI CROSSBOW 4 ULTEGRA DI2 XPRO (s/p) |
| MASSI FURA [4fcf8e18] | mtb | 555 · 571 · 589 · 602 | 586 · 595 · 605 · 619 | 401 · 419 · 436 · 443 | — · — · — · — | MASSI FURA ADVANCED (s/p); MASSI FURA COMP (s/p); MASSI FURA ELITE (s/p); MASSI FURA ENDURANCE (s/p); MASSI FURA ENTER (s/p); MASSI FURA EXPERT (s/p) |
| MASSI K2 [b998a3c3] | emtb | S · M · L | 635 · 639 · 643 | 405 · 438 · 477 | — · — · — | MASSI K2 29" PRO 630WH (s/p); MASSI K2 EVO 29" ADVANCED 630WH (s/p); MASSI K2 EVO 29" TEAM 720WH (s/p) |
| MASSI PRO [7ef24461] | mtb | 570 · 600 · 630 · 650 | 601 · 606 · 620 · 630 | 391 · 420 · 446 · 463 | — · — · — · — | MASSI PRO ELITE (s/p); MASSI PRO EXPERT (s/p); MASSI PRO PERFORMANCE (s/p); MASSI PRO RC ELITE (s/p); MASSI PRO SL ADVANCED (s/p); MASSI PRO SL ENDURANCE (s/p) |
| MASSI TEAM [b11801ad] | mtb | 547 · 560 · 579 · 605 | 607 · 614 · 625 · 635 | 383 · 396 · 414 · 436 | — · — · — · — | MASSI TEAM ELITE (s/p); MASSI TEAM EXPERT (s/p); MASSI TEAM PRO (s/p) |

<details><summary>Tallas rechazadas por la validación</summary>

- MASSI TEAM 105 DB XTECH 48: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM 105 DB XTECH 50: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM 105 DB XTECH 52: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM 105 DB XTECH 54: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM 105 DB XTECH 56: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM 105 DB XTECH 58: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM 105 DI2 MIX DB 48: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM 105 DI2 MIX DB 50: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM 105 DI2 MIX DB 52: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM 105 DI2 MIX DB 54: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM 105 DI2 MIX DB 56: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM 105 DI2 MIX DB 58: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM 105 DB TOUR 48: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM 105 DB TOUR 50: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM 105 DB TOUR 52: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM 105 DB TOUR 54: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM 105 DB TOUR 56: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM 105 DB TOUR 58: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM 105 MIX 11S DB 48: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM 105 MIX 11S DB 50: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM 105 MIX 11S DB 52: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM 105 MIX 11S DB 54: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM 105 MIX 11S DB 56: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM 105 MIX 11S DB 58: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM 105 DB 48: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM 105 DB 50: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM 105 DB 52: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM 105 DB 54: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM 105 DB 56: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM 105 DB 58: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM 105 MIX 12S DB 48: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM 105 MIX 12S DB 50: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM 105 MIX 12S DB 52: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM 105 MIX 12S DB 54: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM 105 MIX 12S DB 56: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM 105 MIX 12S DB 58: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE DURA ACE DI2 DB X-TECH 48: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE DURA ACE DI2 DB X-TECH 50: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE DURA ACE DI2 DB X-TECH 52: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE DURA ACE DI2 DB X-TECH 54: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE DURA ACE DI2 DB X-TECH 56: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE DURA ACE DI2 DB X-TECH 58: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE DURA ACE DI2 DB 48: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE DURA ACE DI2 DB 50: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE DURA ACE DI2 DB 52: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE DURA ACE DI2 DB 54: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE DURA ACE DI2 DB 56: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE DURA ACE DI2 DB 58: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE ULTEGRA DI2 DB X-TECH 48: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE ULTEGRA DI2 DB X-TECH 50: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE ULTEGRA DI2 DB X-TECH 52: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE ULTEGRA DI2 DB X-TECH 54: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE ULTEGRA DI2 DB X-TECH 56: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE ULTEGRA DI2 DB X-TECH 58: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE 105 DI2 DB X-TECH 48: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE 105 DI2 DB X-TECH 50: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE 105 DI2 DB X-TECH 52: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE 105 DI2 DB X-TECH 54: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE 105 DI2 DB X-TECH 56: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE 105 DI2 DB X-TECH 58: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE ULTEGRA DI2 DB 48: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE ULTEGRA DI2 DB 50: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE ULTEGRA DI2 DB 52: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE ULTEGRA DI2 DB 54: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE ULTEGRA DI2 DB 56: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE ULTEGRA DI2 DB 58: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE 105 DB X-TECH 48: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE 105 DB X-TECH 50: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE 105 DB X-TECH 52: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE 105 DB X-TECH 54: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE 105 DB X-TECH 56: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE 105 DB X-TECH 58: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE 105 DI2 DB 48: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE 105 DI2 DB 50: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE 105 DI2 DB 52: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE 105 DI2 DB 54: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE 105 DI2 DB 56: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE 105 DI2 DB 58: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE 105 DB 48: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE 105 DB 50: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE 105 DB 52: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE 105 DB 54: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE 105 DB 56: reach decrece al subir de talla (50: 364 < 368)
- MASSI TEAM RACE 105 DB 58: reach decrece al subir de talla (50: 364 < 368)

</details>


## Conor — con avisos

**Nota:** Geometría por visión (imágenes transcritas en data/vision/conor/). Tallas XS/SM/MD/LA sin equivalencia publicada.

Diff con bikes.csv: **+115** tallas nuevas, **−0** que desaparecen, **~0** con cambios. Productos candidatos: 53. Métodos: vision. Descargas: {'httpx': 0, 'browser': 0, 'cache': 57, 'challenges': 0}.

| Familia | Cat. | Tallas | Stack | Reach | Altura (cm) | Modelos (precio €) |
|---|---|---|---|---|---|---|
| 5400 27,5" [183bb9b2] | mtb | SM · MD · LA | 598 · 598 · 598 | 377 · 387 · 392 | — · — · — | 5400 27,5" (449) |
| 6300 [83e0b475] | mtb | SM · MD · LA | 632 · 632 · 632 | 377 · 387 · 397 | — · — · — | 6300 (549) |
| 720 29" 2x8s [e747c37f] | mtb | SM · MD · LA · XL | 605.7 · 615 · 615 · 624.5 | 415.6 · 417.8 · 427.8 · 535.1 | — · — · — · — | 720 29" 2x8s (629); 850 29" Cues 2x9s (689); 950 29" Cues 11s (789) |
| BORNEO [25dc4dce] | emtb | SM · MD · LA | 686 · 686 · 686 | 390 · 400 · 410 | — · — · — | BORNEO (2410) |
| KALIMA [4a6cb3e0] | gravel | XS 45 · SM 48 · MD 52 · LA 55 | 536 · 549 · 559 · 578 | 381 · 387 · 394 · 404 | — · — · — · — | KALIMA GRX400 2X10s (1499); KALIMA GRX610 2X12s (1899) |
| KIRK [1eb9ba42] | emtb | SM · MD · LA | 680 · 680 · 680 | 371 · 381 · 391 | — · — · — | KIRK (1999) |
| RUSH [5a209e55] | carretera | XS 49 · SM 50.6 · MD 54 · LA 57 | 537 · 555 · 569 · 588 | 376 · 380 · 393 · 400 | — · — · — · — | RUSH 105 2x12s (2499); RUSH Ultegra Di2 (3399) |
| SELVA [8adef849] | gravel | XS 45 · SM 48 · MD 51 · LA 54 | 543 · 559 · 578 · 598 | 380 · 384 · 395 · 405 | — · — · — · — | SELVA GRX610 2X12S (2999); SELVA GRX820 12s (3649); SELVA RACE GRX610 2X12S (4399); SELVA RACE GRX820 12s (4499); SELVA RACE SRAM FORCE (5899); SELVA RACE SRAM RIVAL (5099); SELVA SRAM Force (4999); SELVA SRAM Rival (4199) |
| TEAM [10b068fa] | mtb | SM · MD · LA | 636 · 645 · 645 | 406 · 413 · 444 | — · — · — | TEAM (1299) |
| VOLCANO AERO [809df955] | carretera | XS 49 · SM 52 · MD 54 · LA 56 | 520 · 533 · 554 · 575 | 364 · 369 · 374 · 382 | — · — · — · — | VOLCANO AERO 105 Di2 (4699); VOLCANO AERO DURA-ACE (7299); VOLCANO AERO SRAM FORCE (5999); VOLCANO AERO SRAM RED (7999); VOLCANO AERO ULTEGRA Di2 (5099) |
| VOLCANO [887f2585] | carretera | XS 47 · SM 50 · MD 53 · LA 56 | 533 · 553 · 571 · 589 | 371 · 374 · 381 · 385 | — · — · — · — | VOLCANO 105 Di2 (4799); VOLCANO DURA-ACE (7599); VOLCANO SRAM FORCE (6299); VOLCANO SRAM RED (8299); VOLCANO ULTEGRA Di2 (5399) |

<details><summary>Tallas rechazadas por la validación</summary>

- ADRA SM: stack decrece al subir de talla (LA: 671 < 676)
- ADRA MD: stack decrece al subir de talla (LA: 671 < 676)
- ADRA LA: stack decrece al subir de talla (LA: 671 < 676)

</details>

<details><summary>Productos en alcance sin datos</summary>

- https://conorbikes.com/es/sport/3309-19451-5400-mixta-8424065786624.html — transcripción sin stack/reach

</details>

Descartados: duplicado (mismo modelo): 21

## Coluer — con avisos

Diff con bikes.csv: **+97** tallas nuevas, **−0** que desaparecen, **~0** con cambios. Productos candidatos: 35. Métodos: html. Descargas: {'httpx': 0, 'browser': 0, 'cache': 38, 'challenges': 0}.

| Familia | Cat. | Tallas | Stack | Reach | Altura (cm) | Modelos (precio €) |
|---|---|---|---|---|---|---|
| Arenal [1533e510] | gravel | S · M · L · XL | 549 · 572 · 588 · 603 | 375 · 384 · 393 · 402 | — · — · — · — | Arenal 4.4 (2679); Arenal 6.5 (2929); Arenal 6.6 (3029) |
| Ascent 293 [898d12ec] | mtb | S · M · L · XL | 609 · 618 · 628 · 632 | 382 · 389 · 406 · 447 | — · — · — · — | Ascent 293 (489) |
| Code [74558bb2] | carretera | XS · S · M · L · XL | 512 · 528 · 539 · 560 · 580 | 366 · 373 · 385 · 394 · 403 | — · — · — · — · — | Code 5.4 (2699); Code 5.7 (3499); Code 6.7 (4099) |
| Diva [d308305b] | mtb | XS · S | 534 · 552 | 365 · 379 | — · — | Diva 271 (428); Diva 272 (465); Diva 273 (529) |
| FLAIR 3.7 [90f6ed6d] | mtb | S · M | 515 · 609 | 415 · 436 | — · — | FLAIR 3.7 (999) |
| FLAIR [866e0b2e] | mtb | S · M | 515 · 608 | 415 · 436 | — · — | FLAIR 2.7 (669); FLAIR 3.1 (865) |
| Invicta Disc [d979586c] | carretera | XS · S · M · L · XL | 525 · 546 · 565 · 587 · 603 | 373 · 378 · 383 · 391 · 394 | — · — · — · — · — | Invicta Disc 5.4 (2399); Invicta Disc 5.7 (3099); Invicta Disc 6.7 (3699) |
| Karman [a055e329] | gravel | S · M · L · XL | 547 · 570 · 588 · 607 | 382 · 387 · 392 · 401 | — · — · — · — | Karman 4.4 (1819); Karman 6.5 (1919); Karman 6.6 (1969) |
| Poison ST [486602de] | mtb | M · L | 607 · 621 | 421 · 445 | — · — | Poison ST 4.2 / SOFT TRAIL (1859); Poison ST 4.4 / SOFT TRAIL (2065) |
| Pragma [058d072e] | mtb | S · M · L | 609 · 609 · 618 | 388 · 406 · 425 | — · — · — | Pragma 294 (525 MLO) (549); Pragma 296 SX 12 (525 RL) (729) |
| Pragma [813929bb] | mtb | M · L | 596 · 601 | 402 · 426 | — · — | Pragma 275 (649); Pragma 278 (Reba RL) (799) |
| Radar 5.1 [8170a339] | carretera | S · M · L · XL | 534 · 559 · 575 · 593 | 377 · 379 · 389 · 392 | — · — · — · — | Radar 5.1 (995) |
| Stake CR [ee17590a] | mtb | S · M · L · XL | 593 · 597 · 606 · 620 | 396 · 425 · 446 · 466 | — · — · — · — | Stake CR 4.2 (2799); Stake CR 4.4 (2999) |
| Triven 271 [2beed49c] | mtb | S | 598 | 377 | — | Triven 271 (418) |

<details><summary>Productos en alcance sin datos</summary>

- https://coluer.com/catalogue/limbo-293/ — sin tabla de geometría en la página
- https://coluer.com/catalogue/limbo-292/ — sin tabla de geometría en la página
- https://coluer.com/catalogue/ascent-292-mbdtmact292/ — sin tabla de geometría en la página
- https://coluer.com/catalogue/ascent-263-mbdtmact263/ — transcripción sin stack/reach
- https://coluer.com/catalogue/ascent-262-mbdtmact262/ — transcripción sin stack/reach
- https://coluer.com/catalogue/limbo-296/ — sin tabla de geometría en la página

</details>


## Decathlon — bloqueada

**Nota:** Pendiente de fichas guardadas a mano: decathlon.es rechaza la verificación humana en el Chrome automatizado (en el Chrome normal del usuario sí funciona). Guardar las fichas en data/manual/decathlon/ y ejecutar python -m extractor run decathlon.

**Motivo:** no se encontraron productos (sitemap/listado/JSON)

Diff con bikes.csv: **+0** tallas nuevas, **−0** que desaparecen, **~0** con cambios. Productos candidatos: 0. Métodos: –. Descargas: {'httpx': 0, 'browser': 0, 'cache': 0, 'challenges': 0}.


## KTM — con avisos

Diff con bikes.csv: **+477** tallas nuevas, **−0** que desaparecen, **~0** con cambios. Productos candidatos: 112. Métodos: html. Descargas: {'httpx': 0, 'browser': 0, 'cache': 117, 'challenges': 0}.

| Familia | Cat. | Tallas | Stack | Reach | Altura (cm) | Modelos (precio €) |
|---|---|---|---|---|---|---|
| CHICAGO 291 [6f0d608c] | mtb | XS (32) · S (38) · M (43) · L (48) · XL (53) · XXL (57) | 545 · 555 · 614 · 629 · 642 · 661 | 404 · 416 · 419 · 435 · 451 · 460 | — · — · — · — · — · — | CHICAGO 291 (699); CHICAGO 292 (599); CHICAGO STREET 291 (799); PENNY LANE 291 (699) |
| GRAVELATOR [5c969b76] | gravel | XS (49) · S (52) · M (55) · L (57) · XL (59) | 577 · 594 · 612 · 622 · 636 | 374 · 390 · 404 · 422 · 438 | — · — · — · — · — | GRAVELATOR 10 (1499); GRAVELATOR 10 FIT Q'AUTO (1499); GRAVELATOR 15 (1399); GRAVELATOR 25 (1199); GRAVELATOR 30 (899); GRAVELATOR 30 FIT (799) |
| GRAVELATOR [ef91e11c] | gravel | XS (49) · S (52) · M (55) · L (57) · XL (59) | 552 · 565 · 579 · 598 · 619 | 377 · 388 · 404 · 408 · 411 | — · — · — · — · — | GRAVELATOR ELITE (2399); GRAVELATOR ELITE 2X (2499); GRAVELATOR ELITE DI2 (2699); GRAVELATOR ELITE DI2 PM (2999); GRAVELATOR EXONIC (7799); GRAVELATOR MASTER (2999); GRAVELATOR PRESTIGE (3299); GRAVELATOR PRIME (3499); GRAVELATOR PRO (1899); GRAVELATOR PRO 2X (1899); GRAVELATOR PRO 2X LFC (2199); GRAVELATOR SUPREME (4299) |
| MACINA AERA FS [bc7f663e] | emtb | XS (40) · S (46) · M (51) · L (56) | 624 · 658 · 672 · 680 | 372 · 396 · 401.6 · 414 | — · — · — · — | MACINA AERA FS ELITE LFC (4899); MACINA AERA FS PRIME LFC DI2 (5999) |
| MACINA AERA [179dd29e] | emtb | XS (43) · S (46) · M (51) · L (56) · XL (60) | 630 · 635 · 648 · 658 · 663 | 363 · 371 · 376 · 395 · 413 | — · — · — · — · — | MACINA AERA 871 LFC DI2 (4999); MACINA AERA 872 LFC (3999); MACINA AERA 872 LFC DI2 (4299); MACINA AERA 873 LFC (3799); MACINA AERA CX 720 LFC (3499) |
| MACINA CHACANA 891 XL LFC [2e424b5a] | emtb | M (43) · L (48) · XL (53) · XXL (57) | 610 · 623 · 637 · 651 | 454 · 470 · 487 · 504 | — · — · — · — | MACINA CHACANA 891 XL LFC (4999) |
| MACINA CHACANA [ca25bd99] | emtb | S (38) · M (43) · L (48) · XL (53) · XXL (57) | 597 · 610 · 623 · 637 · 651 | 437 · 454 · 470 · 487 · 504 | — · — · — · — · — | MACINA CHACANA 892 (3999); MACINA CHACANA 892 LFC (4199); MACINA CHACANA CX 720 (3699); MACINA CHACANA CX 720 LFC (3899) |
| MACINA KAPOHO 8973 [b25e1152] | emtb | M (43) · L (48) · XL (53) · XXL (57) | 611 · 620 · 634 · 647 | 453 · 471 · 493 · 519 | — · — · — · — | MACINA KAPOHO 8973 (4199) |
| MACINA KAPOHO [fcac7f25] | emtb | M (43) · L (48) · XL (53) | 611 · 620 · 634 | 453 · 471 · 493 | — · — · — | MACINA KAPOHO ELITE CX-R (4599); MACINA KAPOHO EXONIC CX-R (11999); MACINA KAPOHO MASTER CX-R (5199); MACINA KAPOHO MASTER CX-R DI2 (5599); MACINA KAPOHO PRIME CX-R (6399) |
| MACINA LYCAN EXONIC CX-R DI2 [4a473254] | emtb | M (43) · L (48) · XL (53) | 610 · 623 · 637 | 454 · 470 · 487 | — · — · — | MACINA LYCAN EXONIC CX-R DI2 (7699) |
| MACINA PROWLER [3cb23af0] | emtb | M (43) · L (48) · XL (53) | 618 · 627 · 641 | 443 · 461 · 483 | — · — · — | MACINA PROWLER ELITE CX-R (5499); MACINA PROWLER MASTER CX-R (5799); MACINA PROWLER PRESTIGE CX-R (6799) |
| MACINA RACE SX 10 [e0019c87] | emtb | M (43) · L (48) · XL (53) | 617 · 623.5 · 634.8 | 396.4 · 414.4 · 430.9 | — · — · — | MACINA RACE SX 10 (3299) |
| MACINA SCARP SX [f7f79a76] | emtb | M (43) · L (48L) · XL (53) | 601 · 615 · 629 | 456 · 472 · 499 | — · — · — | MACINA SCARP SX ELITE (4899); MACINA SCARP SX EXONIC (9699); MACINA SCARP SX MASTER DI2 (6699); MACINA SCARP SX PRESTIGE DI2 (8399); MACINA SCARP SX PRIME (7699) |
| MACINA TEAM 750 [fbafe3c4] | emtb | M (43) · L (48) · XL (53) | 618 · 625 · 636 | 400 · 414 · 430 | — · — · — | MACINA TEAM 750 LFC LTD (3199); MACINA TEAM 750 LTD (2999) |
| MACINA TEAM 872 [ecc3ae18] | emtb | S (38) · M (43) | 583 · 588 | 408 · 417 | — · — | MACINA TEAM 872 (3699) |
| MACINA TEAM 873 [f7d6fdc3] | emtb | S (38) · M (43) · L (48) | 583 · 588 · 599 | 408 · 417 · 423 | — · — · — | MACINA TEAM 873 (3499) |
| MACINA TEAM 892 XL [8e393692] | emtb | M (43) · L (48) · XL (53) · XXL (57) | 618 · 625 · 636 · 648 | 401 · 414 · 430 · 447 | — · — · — · — | MACINA TEAM 892 XL (4299) |
| MACINA TEAM [ddf6c026] | emtb | M (43) · L (48) · XL (53) | 618 · 625 · 636 | 401 · 414 · 430 | — · — · — | MACINA TEAM 891 (4199); MACINA TEAM 892 (3699); MACINA TEAM 893 (3499); MACINA TEAM 893 LFC (3699) |
| MACINA [841a6fac] | emtb | XS (43) · S (46) · M (51) · L (56) · XL (60) | 610 · 630 · 652 · 669 · 684 | 389 · 397 · 406 · 415 · 426 | — · — · — · — · — | MACINA AERA PTS 893 LFC (3799); MACINA AERA PTS CX 720 LFC (3599); MACINA TEAM 892 XL PTS (4299) |
| MACINA [8d7664be] | emtb | S (38) · M (43) · L (48) · XL (53) | 597 · 610 · 623 · 637 | 437 · 454 · 470 · 487 | — · — · — · — | MACINA CHACANA ELITE (4199); MACINA CHACANA MASTER (4799); MACINA CHACANA PRIME L DI2 (5699); MACINA LYCAN 891 L (4399); MACINA LYCAN 892 (3999); MACINA LYCAN ELITE CX-R (4399); MACINA LYCAN MASTER CX-R (4799); MACINA LYCAN MASTER CX-R DI2 (5199); MACINA LYCAN PRIME CX-R DI2 (5899) |
| MYROON [b104f215] | mtb | S (38) · M (43) · L (48) · XL (53) | 594 · 604 · 613 · 622 | 425 · 443 · 460 · 477 | — · — · — · — | MYROON ELITE (2599); MYROON EXONIC (7299); MYROON MASTER (3299); MYROON PRIME (4299); MYROON PRO (2099) |
| PENNY LANE [f323b04f] | mtb | XS (32) · S (38) · M (43) · L (48) · XL (53) | 545 · 555 · 614 · 629 · 642 | 404 · 416 · 419 · 435 · 451 | — · — · — · — · — | PENNY LANE 292 (599); PENNY LANE STREET 291 (799) |
| REVELATOR ALTO [740c12b1] | carretera | XS (49) · S (52) · M (55) · L (57) · XL (59) | 519 · 535 · 550 · 559 · 571 | 361 · 377 · 387 · 392 · 396 | — · — · — · — · — | REVELATOR ALTO ELITE (2799); REVELATOR ALTO EXONIC (7999); REVELATOR ALTO MASTER (3299); REVELATOR ALTO MASTER PM (3499); REVELATOR ALTO PRESTIGE (5499); REVELATOR ALTO PRO (1699); REVELATOR ALTO SUPERPRO (1999) |
| REVELATOR SYRO [81504af0] | carretera | XXS (46) · XS (49) · S (52) · M (55) · L (57) · XL (59) · XXL (61) | 513 · 534 · 554 · 573 · 590 · 607 · 626 | 363 · 367 · 376 · 380 · 385 · 389 · 392 | — · — · — · — · — · — · — | REVELATOR SYRO COMP (2199); REVELATOR SYRO ELITE (2999); REVELATOR SYRO MASTER (3399); REVELATOR SYRO MASTER PM (3599); REVELATOR SYRO PRESTIGE (6799); REVELATOR SYRO PRIME (4299); REVELATOR SYRO PRO (2499) |
| REVELATOR [dcd2c66a] | carretera | XS (49) · S (52) · M (55) · L (57) · XL (59) | 532 · 550 · 564 · 573 · 581 | 363 · 372 · 383 · 388 · 393 | — · — · — · — · — | REVELATOR 10 (1399); REVELATOR 15 (1199) |
| SCARP EXONIC [7f427b3c] | mtb | S (38) · M (43) · L (48) · XL (53) | 588 · 597 · 607 · 618 | 434 · 452 · 469 · 487 | — · — · — · — | SCARP EXONIC (12999) |
| SCARP LT [2aeec3ec] | mtb | S (38) · M (43) · L (48) · XL (53) | 611 · 620 · 629 · 638 | 443 · 461 · 479 · 497 | — · — · — · — | SCARP LT 291 (4199); SCARP LT 292 (2599) |
| SCARP MT [9b107627] | mtb | S (38) · M (43) · L (48) · XL (53) | 593 · 602 · 612 · 621 | 428 · 445 · 463 · 480 | — · — · — · — | SCARP MT 291 (2299); SCARP MT EXONIC (8999); SCARP MT MASTER (5799); SCARP MT PRIME (8299) |
| SCARP PRIME [38fbe401] | mtb | S (38) · M (43) · L (48) · XL (53) | 584.3 · 593.6 · 603 · 612 | 438.9 · 456.5 · 474 · 491.7 | — · — · — · — | SCARP PRIME (7999) |
| ULTRA 1964 PRO 29 [8a70075f] | mtb | M (43) · L (48) · XL (53) · XXL (57) | 614 · 629 · 642 · 661 | 419 · 435 · 451 · 460 | — · — · — · — | ULTRA 1964 PRO 29 (1599) |
| ULTRA [bf1d5cd8] | mtb | S (38) · M (43) · L (48) · XL (53) · XXL (57) | 605 · 614 · 629 · 642 · 661 | 401 · 419 · 435 · 451 · 460 | — · — · — · — · — | ULTRA 1964 COMP 29 (1199); ULTRA RIDE 29 (899) |
| X-MYROON [2c0d525c] | gravel | M (43) · L (48) · XL (53) | 604 · 613 · 622 | 443 · 460 · 477 | — · — · — | X-MYROON ELITE (2699); X-MYROON MASTER (3399); X-MYROON PRO (1999) |

<details><summary>Productos en alcance sin datos</summary>

- https://www.ktm-bikes.at/bikes/detail/mx2270441115-revelator-alto-prime-axs-pm-m-55-mx2270441115revelator-alto-primegalaxy-dust-carbon-matt2x12-sram-force-axs-pm-2027 — sin tabla de geometría en la página
- https://www.ktm-bikes.at/bikes/detail/mx2270454117-revelator-alto-elite-di2-pm-l-57-mx2270454117revelator-alto-elite-di2-pmdark-sea-silver-black-2x12-shimano-105-di2-pm-2027 — sin tabla de geometría en la página
- https://www.ktm-bikes.at/bikes/detail/mx2270472215-gravelator-20-lfc-m-55-mx2270472215gravelator-20-lfcbright-teal-matt2x10-shimano-cues-2027 — sin tabla de geometría en la página
- https://www.ktm-bikes.at/bikes/detail/mx2260307108-scarp-master-l-48-mx2260307108scarp-mastercarbon-orange-black-sand-1x12-shimano-deore-xt-di2-2027 — sin tabla de geometría en la página

</details>


## Pinarello — con avisos

**Nota:** Sin precio en la web. Dogma F rechazada: reach publicado no creciente (540: 396,7 > 560: 393,4).

Diff con bikes.csv: **+212** tallas nuevas, **−0** que desaparecen, **~0** con cambios. Productos candidatos: 33. Métodos: html. Descargas: {'httpx': 0, 'browser': 0, 'cache': 41, 'challenges': 0}.

| Familia | Cat. | Tallas | Stack | Reach | Altura (cm) | Modelos (precio €) |
|---|---|---|---|---|---|---|
| DOGMA GR [02e76df9] | gravel | 415 · 425 · 450 · 465 · 485 · 500 · 515 · 525 · 540 | 536 · 543.6 · 552.1 · 560.6 · 572.9 · 587.1 · 603.3 · 624.3 · 653 | 355 · 361.1 · 366.9 · 372.6 · 379.1 · 384 · 388.6 · 392.7 · 398 | — · — · — · — · — · — · — · — · — | DOGMA GR SHIMANO DURA ACE DI2 2x12 (s/p); DOGMA GR SRAM RED XPLR AXS 1x13 (s/p) |
| DOGMA [b71f87ea] | mtb | 405 · 435 · 470 · 500 | 584.9 · 589.5 · 605.8 · 619.7 | 426.5 · 455 · 475 · 495 | — · — · — · — | DOGMA XCR (s/p); DOGMA XCT (s/p) |
| NEW DOGMA X [448a6ae9] | carretera | 415 · 425 · 450 · 470 · 495 · 510 · 520 · 525 · 540 · 560 · 600 | 524.2 · 535.5 · 542.1 · 548.6 · 559 · 568.4 · 578.9 · 588.4 · 601.7 · 632 · 670.3 | 349.3 · 358.1 · 365.4 · 371.7 · 379.4 · 381.2 · 383 · 384.6 · 390.8 · 395.3 · 403.8 | — · — · — · — · — · — · — · — · — · — · — | NEW DOGMA X DURA ACE Di2 (s/p); NEW DOGMA X SRAM RED ETAP AXS (s/p); NEW DOGMA X SUPER RECORD 13 (s/p) |
| NEW GREVIL [a90f69ec] | gravel | 410 · 440 · 470 · 490 · 510 · 545 | 553.2 · 568.3 · 583.2 · 598.4 · 613.6 · 633.7 | 368.4 · 376.1 · 383.7 · 390.4 · 398.2 · 406.9 | — · — · — · — · — · — | NEW GREVIL F1 SHIMANO GRX 610 (s/p); NEW GREVIL F3 SHIMANO GRX 820 (s/p); NEW GREVIL F3 SRAM APEX XPLR (s/p); NEW GREVIL F5 SRAM RIVAL XPLR AXS (s/p); NEW GREVIL F7 SHIMANO GRX 825 DI2 (s/p); NEW GREVIL F7 SRAM FORCE XPLR AXS (s/p); NEW GREVIL F9 SRAM RED XPLR AXS (s/p) |
| NEW PINARELLO X1 105 [2e9cd308] | carretera | 425 · 450 · 470 · 495 · 510 · 525 · 540 · 560 · 590 | 527.5 · 539.2 · 552.4 · 564.4 · 575.8 · 588.2 · 602.4 · 620.3 · 640.4 | 341.9 · 352.1 · 361.9 · 368.5 · 372.5 · 376.7 · 380.2 · 384.1 · 388.1 | — · — · — · — · — · — · — · — · — | NEW PINARELLO X1 105 (s/p) |
| NEW PINARELLO [9e80f2f6] | carretera | 420 · 430 · 455 · 480 · 500 · 525 · 540 · 560 · 590 | 532.5 · 539.2 · 552.4 · 564.4 · 575.8 · 588.2 · 602.4 · 620.3 · 640.4 | 340 · 352.1 · 361.9 · 368.5 · 372.5 · 376.7 · 380.2 · 384.1 · 388.1 | — · — · — · — · — · — · — · — · — | NEW PINARELLO X3 105 Di2 (s/p); NEW PINARELLO X5 105 Di2 (s/p); NEW PINARELLO X7 ULTEGRA Di2 (s/p); NEW PINARELLO X9 DURA ACE Di2 (s/p) |
| PINARELLO F1 105 [18985e35] | carretera | 425 · 450 · 465 · 485 · 500 · 515 · 525 · 560 · 580 | 502.5 · 517.7 · 525.5 · 532.3 · 542.6 · 557.9 · 570.3 · 599.3 · 633.5 | 351.3 · 365.2 · 372.1 · 378.1 · 385.6 · 388.3 · 390.8 · 395.4 · 400.3 | — · — · — · — · — · — · — · — · — | PINARELLO F1 105 (s/p) |
| PINARELLO [5b468130] | mtb | 405 · 435 · 470 · 500 | 592.8 · 597.7 · 614.2 · 628.3 | 415.7 · 444.2 · 464 · 484 | — · — · — · — | PINARELLO XCR9 (s/p); PINARELLO XCT7 (s/p); PINARELLO XCT9 (s/p) |
| PINARELLO [c460f0b8] | carretera | 425 · 450 · 465 · 485 · 500 · 515 · 525 · 560 · 580 | 502 · 517.3 · 525.2 · 532.1 · 542.4 · 557.7 · 570.1 · 599.2 · 633.4 | 351.3 · 365.4 · 372.2 · 378.2 · 385.6 · 388.3 · 390.8 · 395.5 · 400.4 | — · — · — · — · — · — · — · — · — | PINARELLO F3 105 Di2 (s/p); PINARELLO F5 105 Di2 (s/p); PINARELLO F7 SRAM FORCE AXS (s/p); PINARELLO F7 ULTEGRA Di2 (s/p); PINARELLO F9 DURA ACE Di2 (s/p) |

<details><summary>Tallas rechazadas por la validación</summary>

- DOGMA F DURA ACE Di2 425: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F DURA ACE Di2 450: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F DURA ACE Di2 465: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F DURA ACE Di2 485: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F DURA ACE Di2 500: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F DURA ACE Di2 510: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F DURA ACE Di2 520: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F DURA ACE Di2 525: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F DURA ACE Di2 540: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F DURA ACE Di2 560: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F DURA ACE Di2 600: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F SRAM RED ETAP AXS 425: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F SRAM RED ETAP AXS 450: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F SRAM RED ETAP AXS 465: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F SRAM RED ETAP AXS 485: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F SRAM RED ETAP AXS 500: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F SRAM RED ETAP AXS 510: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F SRAM RED ETAP AXS 520: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F SRAM RED ETAP AXS 525: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F SRAM RED ETAP AXS 540: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F SRAM RED ETAP AXS 560: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F SRAM RED ETAP AXS 600: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F PQ3 TEAM REPLICA 425: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F PQ3 TEAM REPLICA 450: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F PQ3 TEAM REPLICA 465: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F PQ3 TEAM REPLICA 485: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F PQ3 TEAM REPLICA 500: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F PQ3 TEAM REPLICA 510: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F PQ3 TEAM REPLICA 520: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F PQ3 TEAM REPLICA 525: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F PQ3 TEAM REPLICA 540: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F PQ3 TEAM REPLICA 560: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F PQ3 TEAM REPLICA 600: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F INEOS TEAM REPLICA 425: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F INEOS TEAM REPLICA 450: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F INEOS TEAM REPLICA 465: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F INEOS TEAM REPLICA 485: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F INEOS TEAM REPLICA 500: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F INEOS TEAM REPLICA 510: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F INEOS TEAM REPLICA 520: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F INEOS TEAM REPLICA 525: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F INEOS TEAM REPLICA 540: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F INEOS TEAM REPLICA 560: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F INEOS TEAM REPLICA 600: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F SUPER RECORD 13 425: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F SUPER RECORD 13 450: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F SUPER RECORD 13 465: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F SUPER RECORD 13 485: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F SUPER RECORD 13 500: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F SUPER RECORD 13 510: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F SUPER RECORD 13 520: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F SUPER RECORD 13 525: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F SUPER RECORD 13 540: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F SUPER RECORD 13 560: reach decrece al subir de talla (560: 393.4 < 396.7)
- DOGMA F SUPER RECORD 13 600: reach decrece al subir de talla (560: 393.4 < 396.7)

</details>


## Colnago — con avisos

Diff con bikes.csv: **+82** tallas nuevas, **−0** que desaparecen, **~0** con cambios. Productos candidatos: 18. Métodos: pdf. Descargas: {'httpx': 0, 'browser': 0, 'cache': 37, 'challenges': 0}.

| Familia | Cat. | Tallas | Stack | Reach | Altura (cm) | Modelos (precio €) |
|---|---|---|---|---|---|---|
| C68 Allroad [c3c82927] | carretera | 430 · 460 · 490 · 520 · 550 · 580 | 523 · 543 · 563 · 583 · 603 · 623 | 370 · 375 · 380 · 386 · 393 · 400 | — · — · — · — · — · — | C68 Allroad (s/p) |
| C68 Gravel [dcc4dc47] | gravel | 450 · 480 · 510 · 540 · 570 | 541 · 555 · 580 · 605 · 630 | 375 · 386 · 397 · 408 · 419 | — · — · — · — · — | C68 Gravel (s/p) |
| C68 [dc1018d9] | carretera | R420 · R455 · R485 · R510 · R530 · R550 · R570 | 510 · 522 · 539 · 557 · 575 · 593 · 612 | 370 · 375 · 383 · 388 · 395 · 403 · 410 | — · — · — · — · — · — · — | C68 Rim Brake (6930); C68 Road (s/p); C68 Road Ti (s/p) |
| G4-X [c1328a62] | gravel | 45 · 48 · 52 · 54 · 57 | 535 · 554 · 573 · 591 · 610 | 371 · 380 · 390 · 400 · 410 | — · — · — · — · — | G4-X (4330+); G4-X ICBL (4330+) |
| Steelnovo [adb90377] | carretera | 420 · 455 · 485 · 510 · 530 · 550 · 570 | 512 · 525 · 543 · 562 · 580 · 599 · 619 | 370 · 375 · 382 · 387 · 394 · 402 · 409 | — · — · — · — · — · — · — | Steelnovo (17500); Steelnovo Road (s/p) |
| V4 [af2ac260] | carretera | 420 · 455 · 485 · 510 · 530 · 550 · 570 | 510 · 522 · 539 · 557 · 575 · 593 · 612 | 370 · 375 · 383 · 388 · 395 · 403 · 410 | — · — · — · — · — · — · — | V4 (5200+); V4Rs (s/p) |
| V5Rs [55456fed] | carretera | 420 · 455 · 485 · 510 · 530 · 550 · 570 | 509 · 523 · 539 · 557 · 575 · 593 · 612 | 371 · 377 · 384 · 390 · 397 · 404 · 411 | — · — · — · — · — · — · — | V5Rs (s/p) |
| Y1Rs [6830562b] | carretera | XS · S · M · L · XL | 495 · 520 · 540 · 565 · 590 | 368 · 377 · 386 · 395 · 404 | — · — · — · — · — | Y1Rs (s/p) |

<details><summary>Productos en alcance sin datos</summary>

- https://www.colnago.com/es-es/products/bicicleta-g3-x — PDF sin tabla de stack/reach legible
- https://www.colnago.com/es-es/products/bicicleta-master — PDF sin tabla de stack/reach legible
- https://www.colnago.com/es-es/premium-bikes/c72-road-bike — PDF sin tabla de stack/reach legible

</details>

Descartados: duplicado (mismo modelo): 2

## Wilier — con avisos

Diff con bikes.csv: **+156** tallas nuevas, **−0** que desaparecen, **~0** con cambios. Productos candidatos: 38. Métodos: html. Descargas: {'httpx': 0, 'browser': 0, 'cache': 33, 'challenges': 0}.

| Familia | Cat. | Tallas | Stack | Reach | Altura (cm) | Modelos (precio €) |
|---|---|---|---|---|---|---|
| 101X [f760d7dd] | mtb | S · M · L · XL | 607 · 610 · 627 · 644 | 400 · 420 · 435 · 450 | — · — · — · — | 101X (2150+) |
| 110FX [56c53317] | mtb | S · M · L · XL | 589 · 596 · 605 · 614 | 395 · 417 · 440 · 463 | — · — · — · — | 110FX (3100+) |
| 503X Race [694d945b] | mtb | S · M · L · XL | 617 · 628 · 639 · 650 | 395 · 412 · 428 · 444 | — · — · — · — | 503X Race (1600+) |
| Adlar [35dbd03a] | gravel | XS · S · M · L · XL | 538 · 562 · 586 · 610 · 634 | 395 · 404 · 413 · 422 · 431 | — · — · — · — · — | Adlar (2600+) |
| Cento10 SL [13dcd224] | carretera | XS · S · M · L · XL · XXL | 503 · 519 · 536 · 554 · 571 · 589 | 378 · 382 · 387 · 391 · 396 · 400 | — · — · — · — · — · — | Cento10 SL (4400+) |
| Filante [0f8acb34] | carretera | XS · S · M · L · XL · XXL | 505 · 523 · 541 · 559 · 577 · 595 | 373.5 · 380 · 386.5 · 393 · 400 · 408 | — · — · — · — · — · — | Filante SL ID2 (4800+); Filante SLR ID2 (8500+) |
| Filante [2040ae68] | carretera | XS · S · M · L · XL · XXL | 505 · 521 · 538 · 555 · 571 · 587 | 380 · 384 · 388 · 391 · 395 · 399 | — · — · — · — · — · — | Filante SL (4700+); Filante SLR (6999+) |
| GTR Team [a7517bc7] | carretera | XS · S · M · L · XL · XXL | 515 · 531 · 548 · 566 · 583 · 602 | 373 · 378 · 383 · 388 · 394 · 399 | — · — · — · — · — · — | GTR Team (2050+) |
| Garda [6be6aff0] | carretera | XS · S · M · L · XL · XXL | 515 · 531 · 548 · 566 · 584 · 602 | 373 · 378 · 383 · 388 · 393 · 398 | — · — · — · — · — · — | Garda (2600+) |
| Granturismo SL [1a27b0ec] | carretera | XS · S · M · L · XL · XXL | 527 · 546 · 566 · 586 · 604 · 625 | 369 · 374 · 379 · 384 · 389 · 395 | — · — · — · — · — · — | Granturismo SL (4400+) |
| Granturismo SLR [82cb36cb] | carretera | XS · S · M · L · XL · XXL | 527 · 546 · 566 · 586 · 604 · 625 | 369 · 374 · 379 · 384 · 389 · 395 | — · — · — · — · — · — | Granturismo SLR (8200+) |
| Jareen [f5972dc7] | gravel | XS · S · M · L · XL | 524 · 546 · 566 · 585 · 604 | 368 · 376 · 383 · 390 · 396 | — · — · — · — · — | Jareen (1800+) |
| Jaroon [ce968c4e] | gravel | XS · S · M · L · XL | 548 · 567 · 587 · 606 · 626 | 384 · 392 · 401 · 409 · 417 | — · — · — · — · — | Jaroon (1899+) |
| Jena [14f4f9d1] | gravel | XS · S · M · L · XL | 531 · 556 · 582 · 608 · 633 | 363 · 372 · 382 · 391 · 401 | — · — · — · — · — | Jena (2700+) |
| Rapida [1f5c3dcc] | carretera | XS · S · M · L · XL · XXL | 520 · 538 · 556 · 574 · 592 · 610 | 372 · 378 · 384.5 · 390 · 396 · 402 | — · — · — · — · — · — | Rapida (2899+) |
| Rave SLR ID2 [8382f714] | gravel | XS · S · M · L · XL · XXL | 532 · 546 · 561 · 579 · 597 · 617 | 375 · 381 · 387 · 393 · 400 · 408 | — · — · — · — · — · — | Rave SLR ID2 (4900+) |
| Rave [6c289d2f] | gravel | XS · S · M · L · XL · XXL | 513 · 532 · 551 · 570 · 589 · 608 | 370 · 377 · 384 · 391 · 398 · 405 | — · — · — · — · — · — | Rave SL (4200+); Rave SLR (8000+) |
| URTA Ultimate [979316bf] | mtb | S · M · L · XL | 597.5 · 597.5 · 602 · 616 | 424 · 452 · 480 · 505 | — · — · — · — | URTA Ultimate (7500+) |
| Urta Hybrid [f9faa1ae] | emtb | S · M · L · XL | 593 · 597 · 608 · 623 | 406 · 432 · 458 · 485 | — · — · — · — | Urta Hybrid (7300+) |
| Urta Max [476eebc4] | mtb | S · M · L · XL | 598 · 598 · 602 · 613 | 415 · 443 · 471 · 500 | — · — · — · — | Urta Max SL (3900+); Urta Max SLR (4999+) |
| Urta SLR [33ed538b] | mtb | S · M · L · XL | 593 · 596 · 604 · 613 | 400 · 426 · 453 · 480 | — · — · — · — | Urta SLR (7400+) |
| Usma [03cd8754] | mtb | S · M · L · XL | 597 · 608 · 619 · 630 | 405 · 430 · 454 · 478 | — · — · — · — | Usma SL (2100+); Usma SLR (6400+) |
| Verticale SLR [4ec179e1] | carretera | XS · S · M · L · XL · XXL | 505 · 523 · 541 · 559 · 577 · 595 | 374 · 380 · 387 · 393 · 400 · 408 | — · — · — · — · — · — | Verticale SLR (7900+) |
| Wilier 0 [1b2ad81b] | carretera | XS · S · M · L · XL · XXL | 503 · 519 · 536 · 554 · 572 · 591 | 376 · 381 · 386 · 391 · 397 · 402 | — · — · — · — · — · — | Wilier 0 SL (5100+); Wilier 0 SLR (9400+) |

<details><summary>Productos en alcance sin datos</summary>

- https://www.wilier.com/es/bicicletas/carretera/superleggera — sin tabla de geometría en la página

</details>

Descartados: fuera de alcance (URL/tipo): 6, duplicado (mismo modelo): 1

## Basso — OK

Diff con bikes.csv: **+39** tallas nuevas, **−0** que desaparecen, **~0** con cambios. Productos candidatos: 6. Métodos: html. Descargas: {'httpx': 0, 'browser': 0, 'cache': 8, 'challenges': 0}.

| Familia | Cat. | Tallas | Stack | Reach | Altura (cm) | Modelos (precio €) |
|---|---|---|---|---|---|---|
| Astra [b4f9f21a] | carretera | 45 · 48 · 51 · 53 · 56 · 58 · 61 | 538.9 · 538.9 · 563.4 · 575.9 · 602.4 · 625.4 · 650.4 | 371.1 · 371.1 · 374.5 · 380.4 · 382.1 · 384.4 · 385.5 | — · — · — · — · — · — · — | Astra (s/p) |
| Diamante [8f487849] | carretera | 45 · 48 · 51 · 53 · 56 · 58 · 61 | 521.7 · 521.8 · 546.2 · 558.8 · 584.3 · 608 · 632.2 | 374.9 · 375.2 · 378.6 · 384.8 · 386.9 · 389 · 390.7 | — · — · — · — · — · — · — | Diamante (s/p) |
| Palta III [a8ed783b] | gravel | XS · S · M · L · XL · XXL | 530 · 550 · 570 · 590 · 605 · 620 | 354 · 362 · 373 · 385 · 398 · 405 | — · — · — · — · — · — | Palta III (s/p) |
| Palta [35752cac] | gravel | XS · S · M · L · XL | 528 · 542 · 563 · 581 · 600 | 354 · 370 · 373 · 389 · 402 | — · — · — · — · — | Palta (s/p) |
| SV [0f303f55] | carretera | 45 · 48 · 51 · 53 · 56 · 58 · 61 | 520 · 521 · 547 · 560 · 584 · 609 · 634 | 370 · 375 · 380 · 385 · 387 · 389 · 390 | — · — · — · — · — · — · — | SV (s/p) |
| Venta R [13d891e0] | carretera | 42 · 48 · 51 · 53 · 56 · 58 · 61 | 534 · 534 · 558.5 · 571 · 579.5 · 620.5 · 645.4 | 371.9 · 372 · 375.4 · 381.3 · 383.1 · 385.3 · 386.6 | — · — · — · — · — · — · — | Venta R (s/p) |


## 3T — con avisos

Diff con bikes.csv: **+86** tallas nuevas, **−0** que desaparecen, **~0** con cambios. Productos candidatos: 47. Métodos: html. Descargas: {'httpx': 0, 'browser': 0, 'cache': 79, 'challenges': 0}.

| Familia | Cat. | Tallas | Stack | Reach | Altura (cm) | Modelos (precio €) |
|---|---|---|---|---|---|---|
| EXTREMA [170d009e] | gravel | S · M · L · XL | 547 · 570 · 590 · 610 | 358 · 368 · 376 · 384 | 157–171 · 168–180 · 176–186 · 183–195 | EXTREMA ITALIA ~ FORCE XPLR 1X13 DISCUS 45|40 (7835); EXTREMA ITALIA ~ GRX Di2 1X12 DISCUS 45|40 (7538); EXTREMA ITALIA ~ RIVAL E1/GX EAGLE TRANSMISSION AXS 1X12 DISCUS 45|40 (7538); EXTREMA ITALIA_X ~ FORCE XPLR 1X13 DISCUS 45|40 (9224); EXTREMA ITALIA_X ~ GRX Di2 1X12 DISCUS 45|40 (8827); EXTREMA ITALIA_X ~ RED E1/XX SL TRASMISSION AXS 1X12 DISCUS 45|40 LTD (12894); EXTREMA ITALIA_X ~ RIVAL E1/GX EAGLE TRANSMISSION AXS 1X12 DISCUS 45|40 (8827) |
| RACEMAX 2 [0c4e0c74] | gravel | S · M · L · XL | 547 · 569 · 589 · 609 | 367 · 377 · 385 · 393 | 157–171 · 168–180 · 176–186 · 183–195 | RACEMAX 2 ITALIA ~ FORCE XPLR 1X13 DISCUS 45|40 (7736); RACEMAX 2 ITALIA ~ RECORD X 1X13 DISCUS 45|40 (7835); RACEMAX 2 ITALIA ~ RIVAL XPLR 1X13 DISCUS 40|30 (6844); RACEMAX 2 ITALIA_X ~ FORCE XPLR 1X13 TORNO DISCUS 45|40 LTD (9918); RACEMAX 2 ITALIA_X ~ RED XPLR PM 1X13 ZIPP 303 XPLR SW (13390); RACEMAX 2 ITALIA_X ~ RED XPLR TORNO 1X13 ZIPP 303 XPLR SW (13390); RACEMAX 2 ITALIA_X ~ SUPER RECORD 1X13 BORA X (13390) |
| STRADA [d783862c] | carretera | XS · S · M · L · XL | 510 · 532 · 554 · 574 · 594 | 358 · 369 · 380 · 388 · 396 | — · — · — · — · — | STRADA ITALIA ~ DURA-ACE PM Di2 2X12 SHARQ (10711); STRADA ITALIA ~ FORCE 1X13 XPLR SHARQ (8430); STRADA ITALIA ~ ULTEGRA Di2 2X12 SHARQ (8430); STRADA ITALIA_X ~ DURA-ACE PM Di2 2X12 SHARQ (11802); STRADA ITALIA_X ~ FORCE 1X13 XPLR SHARQ (9521); STRADA ITALIA_X ~ ULTEGRA Di2 2X12 SHARQ (9521) |

<details><summary>Productos en alcance sin datos</summary>

- https://3t.bike/products/strada-wpnt-ultegra-di2-2x12-discus-40-30 — sin tabla de geometría en la página
- https://3t.bike/products/racemax-wpnt-rival-axs-1x13 — sin tabla de geometría en la página
- https://3t.bike/products/racemax-wpnt-grx-di2-2x12 — sin tabla de geometría en la página
- https://3t.bike/products/racemax-wpnt-rival-axs-1x13discus-40-30 — sin tabla de geometría en la página
- https://3t.bike/products/racemax-wpnt-grx-di2-2x12-discus-40-30 — sin tabla de geometría en la página
- https://3t.bike/products/ultra-2-italia-grx-1x12 — sin tabla de geometría en la página
- https://3t.bike/products/ultra-2-italia-rival-gx-axs-1x12 — sin tabla de geometría en la página
- https://3t.bike/products/ultra-2-italia-grx-di2-1x12 — sin tabla de geometría en la página
- https://3t.bike/products/ultra-2-italia-grx-1x12-dt-swiss-f-132-one — sin tabla de geometría en la página
- https://3t.bike/products/ultra-2-italia-rival-gx-axs-1x12-dt-swiss-f-132-one — sin tabla de geometría en la página
- https://3t.bike/products/ultra-2-italia-grx-di2-1x12-dt-swiss-f-132-one — sin tabla de geometría en la página
- https://3t.bike/products/ultra-2-italia-rival-gx-axs-1x12-discus-45-40 — sin tabla de geometría en la página
- https://3t.bike/products/ultra-2-italia-grx-di2-1x12-discus-45-40 — sin tabla de geometría en la página
- https://3t.bike/products/ultra-2-italia-rival-gx-axs-1x12-discus-45-40-dt-swiss-f-132-one — sin tabla de geometría en la página
- https://3t.bike/products/ultra-2-italia-grx-di2-1x12-discus-45-40-dt-swiss-f-132-one — sin tabla de geometría en la página
- https://3t.bike/products/primo2-wpnt-grx-1x12-10th-anniversary — sin tabla de geometría en la página
- https://3t.bike/products/primo2-wpnt-rival-xplr-axs-1x13-discus-40-30-10th-anniversary — sin tabla de geometría en la página
- https://3t.bike/products/primo2-wpnt-ultegra-di2-2-12-discus-40-30 — sin tabla de geometría en la página

</details>

<details><summary>Avisos</summary>

- STRADA ITALIA_X ~ ULTEGRA Di2 2X12 SHARQ: altura en 4 de 5 tallas → altura descartada
- STRADA ITALIA_X ~ FORCE 1X13 XPLR SHARQ: altura en 4 de 5 tallas → altura descartada
- STRADA ITALIA_X ~ DURA-ACE PM Di2 2X12 SHARQ: altura en 4 de 5 tallas → altura descartada
- STRADA ITALIA ~ ULTEGRA Di2 2X12 SHARQ: altura en 4 de 5 tallas → altura descartada
- STRADA ITALIA ~ FORCE 1X13 XPLR SHARQ: altura en 4 de 5 tallas → altura descartada
- STRADA ITALIA ~ DURA-ACE PM Di2 2X12 SHARQ: altura en 4 de 5 tallas → altura descartada

</details>

Descartados: excluido por nombre (cuadro, kit, junior…): 9

## Aurum — OK

Diff con bikes.csv: **+15** tallas nuevas, **−0** que desaparecen, **~0** con cambios. Productos candidatos: 3. Métodos: html. Descargas: {'httpx': 0, 'browser': 0, 'cache': 7, 'challenges': 0}.

| Familia | Cat. | Tallas | Stack | Reach | Altura (cm) | Modelos (precio €) |
|---|---|---|---|---|---|---|
| ESSENTIA [a4938a0f] | carretera | 48 · 51 · 54 · 56 · 58 | 505 · 525 · 545 · 567 · 589 | 370 · 376 · 384 · 392 · 400 | 152–163 · 161–170 · 170–177 · 175–181 · 180–188 | ESSENTIA (6532.8+) |
| MAGMA [732e89f9] | carretera | 48 · 51 · 54 · 56 · 58 | 505 · 525 · 545 · 570 · 592 | 371 · 377 · 386 · 393 · 401 | 152–163 · 161–170 · 170–177 · 175–181 · 180–188 | MAGMA (9073.8+) |
| MANTO [1a784aa3] | gravel | 48 · 51 · 54 · 56 · 58 | 515 · 535 · 555 · 570 · 590 | 380 · 386 · 394 · 402 · 411 | 152–163 · 161–170 · 170–177 · 175–181 · 180–188 | MANTO (6411.8+) |


## Ridley — bloqueada

**Nota:** Bloqueada: la tabla de geometría solo tiene filas con letras (A…J, S, R) y la web no publica la leyenda; S/R parecen stack/reach pero no está confirmado por la marca.

**Motivo:** sin filas válidas: sin tabla de geometría en la página

Diff con bikes.csv: **+0** tallas nuevas, **−0** que desaparecen, **~0** con cambios. Productos candidatos: 43. Métodos: –. Descargas: {'httpx': 0, 'browser': 0, 'cache': 70, 'challenges': 0}.

<details><summary>Productos en alcance sin datos</summary>

- https://www.ridley-bikes.com/es_ES/bikes/SBINF3RID155 — sin tabla de geometría en la página
- https://www.ridley-bikes.com/es_ES/bikes/SBINH3RID178 — sin tabla de geometría en la página
- https://www.ridley-bikes.com/es_ES/bikes/SBIFRSRID133 — sin tabla de geometría en la página
- https://www.ridley-bikes.com/es_ES/bikes/SBIFALRID313 — sin tabla de geometría en la página
- https://www.ridley-bikes.com/es_ES/bikes/SBIGRSRID093 — sin tabla de geometría en la página
- https://www.ridley-bikes.com/es_ES/bikes/SBIKARRID685 — sin tabla de geometría en la página
- https://www.ridley-bikes.com/es_ES/bikes/SBIKALRID058 — sin tabla de geometría en la página
- https://www.ridley-bikes.com/es_ES/bikes/SBIKF2RID015 — sin tabla de geometría en la página
- https://www.ridley-bikes.com/es_ES/bikes/SBIARSRID117 — sin tabla de geometría en la página
- https://www.ridley-bikes.com/es_ES/bikes/SBIASTRID158 — sin tabla de geometría en la página
- https://www.ridley-bikes.com/es_ES/bikes/SBIKAFRID278 — sin tabla de geometría en la página
- https://www.ridley-bikes.com/es_ES/bikes/SBIKADRID338 — sin tabla de geometría en la página
- https://www.ridley-bikes.com/es_ES/bikes/SBIKAVRID148 — sin tabla de geometría en la página
- https://www.ridley-bikes.com/es_ES/bikes/SBIKAVRID130 — sin tabla de geometría en la página
- https://www.ridley-bikes.com/es_ES/bikes/SBIGRSRID069 — sin tabla de geometría en la página
- https://www.ridley-bikes.com/es_ES/bikes/SBIKARRID608 — sin tabla de geometría en la página
- https://www.ridley-bikes.com/es_ES/bikes/SBIKALRID070 — sin tabla de geometría en la página
- https://www.ridley-bikes.com/es_ES/bikes/SBIXTARID942 — sin tabla de geometría en la página
- https://www.ridley-bikes.com/es_ES/bikes/SBIKECRID013 — sin tabla de geometría en la página
- https://www.ridley-bikes.com/es_ES/bikes/SBIISXRID310 — sin tabla de geometría en la página
- https://www.ridley-bikes.com/es_ES/bikes/SBIFSDRID844 — sin tabla de geometría en la página
- https://www.ridley-bikes.com/es_ES/bikes/SBIFENRID021 — sin tabla de geometría en la página
- https://www.ridley-bikes.com/es_ES/bikes/SBIHEDRID172 — sin tabla de geometría en la página
- https://www.ridley-bikes.com/es_ES/bikes/SBIKALRID106 — sin tabla de geometría en la página
- https://www.ridley-bikes.com/es_ES/bikes/SBIKAFRID340 — sin tabla de geometría en la página
- https://www.ridley-bikes.com/es_ES/bikes/SBIGRAINV003 — sin tabla de geometría en la página

</details>

Descartados: excluido por nombre (cuadro, kit, junior…): 5, fuera de alcance (categoría): 12

## BMC — OK

Diff con bikes.csv: **+208** tallas nuevas, **−0** que desaparecen, **~0** con cambios. Productos candidatos: 68. Métodos: html. Descargas: {'httpx': 0, 'browser': 0, 'cache': 78, 'challenges': 0}.

| Familia | Cat. | Tallas | Stack | Reach | Altura (cm) | Modelos (precio €) |
|---|---|---|---|---|---|---|
| Fourstroke 01 THREE [192e041c] | mtb | S · M · L · XL | 584 · 592 · 600 · 615 | 437 · 457 · 477 · 500 | ≤–172 · 172–182 · 180–188 · 188–∞ | Fourstroke 01 THREE (4499) |
| Fourstroke R 01 ONE [035d3548] | mtb | S · M · L · XL | 584 · 592 · 600 · 615 | 437 · 457 · 477 · 500 | ≤–172 · 172–182 · 180–188 · 188–∞ | Fourstroke R 01 ONE (12999) |
| Kaius 01 FOUR [140a4019] | gravel | 47 · 51 · 54 · 56 · 58 · 61 | 510 · 530 · 550 · 570 · 595 · 620 | 390 · 397 · 401 · 405 · 410 · 414 | ≤–166 · 166–174 · 172–180 · 178–186 · 184–192 · 190–∞ | Kaius 01 FOUR (5999) |
| Kaius 01 THREE [f6950d30] | gravel | 47 · 51 · 54 · 56 · 58 · 61 | 521 · 541 · 561 · 581 · 606 · 631 | 385 · 392 · 396 · 400 · 405 · 409 | ≤–166 · 166–174 · 172–180 · 178–186 · 184–192 · 190–∞ | Kaius 01 THREE (5499) |
| Kaius 01 [33abf899] | gravel | 47 · 51 · 54 · 56 · 58 · 61 | 521 · 541 · 561 · 581 · 606 · 631 | 385 · 392 · 396 · 400 · 405 · 409 | ≤–166 · 166–174 · 172–180 · 178–186 · 184–192 · 190–∞ | Kaius 01 ONE (10999); Kaius 01 TWO (7999) |
| Roadmachine 01 FOUR [70d784f5] | carretera | 47 · 51 · 54 · 56 · 58 · 61 | 525 · 550 · 570 · 595 · 620 · 645 | 370 · 379 · 383 · 388 · 393 · 398 | ≤–160 · 158–174 · 172–180 · 178–186 · 184–192 · 190–∞ | Roadmachine 01 FOUR (7999) |
| Roadmachine 01 ONE [8b5b754c] | carretera | 47 · 51 · 54 · 56 · 58 · 61 | 525 · 550 · 570 · 595 · 620 · 645 | 370 · 379 · 383 · 388 · 393 · 398 | ≤–160 · 158–174 · 172–180 · 178–186 · 184–192 · 190–∞ | Roadmachine 01 ONE (9499) |
| Roadmachine 01 [12dc13f9] | carretera | 47 · 51 · 54 · 56 · 58 · 61 | 525 · 550 · 570 · 595 · 620 · 645 | 370 · 379 · 383 · 388 · 393 · 398 | ≤–160 · 158–174 · 172–180 · 178–186 · 184–192 · 190–∞ | Roadmachine 01 THREE (6999); Roadmachine 01 TWO (7999) |
| Roadmachine [d750ff77] | carretera | 47 · 51 · 54 · 56 · 58 · 61 | 525 · 550 · 570 · 595 · 620 · 645 | 370 · 379 · 383 · 388 · 393 · 398 | ≤–160 · 158–174 · 172–180 · 178–186 · 184–192 · 190–∞ | Roadmachine ONE (3999); Roadmachine Three (2499); Roadmachine Two (2999) |
| Teammachine R 01 Five [d3ab3656] | carretera | 47 · 51 · 54 · 56 · 58 · 61 | 504 · 528 · 548 · 563 · 582 · 608 | 368 · 378 · 387 · 393 · 402 · 409 | ≤–166 · 166–174 · 172–180 · 178–186 · 184–192 · 190–∞ | Teammachine R 01 Five (6499) |
| Teammachine R 01 [4d7e8fa2] | carretera | 47 · 51 · 54 · 56 · 58 · 61 | 504 · 528 · 548 · 563 · 582 · 608 | 368 · 378 · 387 · 393 · 402 · 409 | ≤–166 · 166–174 · 172–180 · 178–186 · 184–192 · 190–∞ | Teammachine R 01 Four (7999); Teammachine R 01 One (12999); Teammachine R 01 Three (8499); Teammachine R 01 Two (11999) |
| Teammachine SLR 01 Six [e61bc370] | carretera | 47 · 51 · 54 · 56 · 58 · 61 | 506 · 530 · 550 · 565 · 584 · 608 | 367 · 377 · 386 · 392 · 401 · 409 | ≤–166 · 166–174 · 172–180 · 178–186 · 184–192 · 190–∞ | Teammachine SLR 01 Six (6499) |
| Teammachine SLR 01 [20577c6c] | carretera | 47 · 51 · 54 · 56 · 58 · 61 | 506 · 530 · 550 · 565 · 584 · 608 | 367 · 377 · 386 · 392 · 401 · 409 | ≤–166 · 166–174 · 172–180 · 178–186 · 184–192 · 190–∞ | Teammachine SLR 01 Five (7499); Teammachine SLR 01 Four (8999) |
| Teammachine SLR 01 [953fe149] | carretera | 47 · 51 · 54 · 56 · 58 · 61 | 506 · 530 · 550 · 565 · 584 · 608 | 367 · 377 · 386 · 392 · 401 · 409 | ≤–166 · 166–174 · 172–180 · 178–186 · 184–192 · 190–∞ | Teammachine SLR 01 One (12999); Teammachine SLR 01 Three (8499); Teammachine SLR 01 Two (11999) |
| Teammachine SLR FOUR [ea8ac049] | carretera | 47 · 51 · 54 · 56 · 58 · 61 | 506 · 530 · 550 · 565 · 584 · 608 | 367 · 377 · 386 · 392 · 401 · 409 | ≤–166 · 166–174 · 172–180 · 178–186 · 184–192 · 190–∞ | Teammachine SLR FOUR (2699) |
| Teammachine SLR [85a46afa] | carretera | 47 · 51 · 54 · 56 · 58 · 61 | 506 · 530 · 550 · 565 · 584 · 608 | 367 · 377 · 386 · 392 · 401 · 409 | ≤–166 · 166–174 · 172–180 · 178–186 · 184–192 · 190–∞ | Teammachine SLR 01 Seven (5499); Teammachine SLR One (3999); Teammachine SLR Three (2499); Teammachine SLR Two (2999) |
| Twostroke 01 ONE [c86f9950] | mtb | S · M · L · XL | 600 · 605 · 610 · 617 | 432 · 455 · 475 · 497 | ≤–172 · 170–180 · 178–188 · 188–∞ | Twostroke 01 ONE (5499) |
| Twostroke 01 TWO [8c335e0c] | mtb | S · M · L · XL | 600 · 605 · 610 · 617 | 432 · 455 · 475 · 497 | ≤–172 · 170–180 · 178–188 · 188–∞ | Twostroke 01 TWO (2999) |
| URS 01 ONE [0a6bbf81] | gravel | XS · S · M · L · XL | 560 · 560 · 580 · 610 · 640 | 390 · 400 · 410 · 420 · 430 | ≤–167 · 165–170 · 168–178 · 176–188 · 188–∞ | URS 01 ONE (7999) |
| URS [429c0548] | gravel | XS · S · M · L · XL | 560 · 560 · 580 · 610 · 640 | 390 · 400 · 410 · 420 · 430 | ≤–167 · 165–170 · 168–178 · 176–188 · 188–∞ | URS 01 LT One (4499); URS 01 LT TWO (3999); URS 01 TWO (5499); URS One (3699); URS TWO (2999) |

Descartados: excluido por nombre (cuadro, kit, junior…): 2, duplicado (mismo modelo): 29

## Factor — OK

Diff con bikes.csv: **+51** tallas nuevas, **−0** que desaparecen, **~0** con cambios. Productos candidatos: 9. Métodos: json. Descargas: {'httpx': 0, 'browser': 0, 'cache': 10, 'challenges': 0}.

| Familia | Cat. | Tallas | Stack | Reach | Altura (cm) | Modelos (precio €) |
|---|---|---|---|---|---|---|
| ALUTO [c07580fa] | gravel | 49 · 52 · 54 · 56 · 58 · 61 | 530 · 547 · 565 · 585 · 605 · 625 | 377 · 385 · 393 · 402 · 412 · 422 | — · — · — · — · — · — | ALUTO (s/p) |
| ELARA [8cff9481] | gravel | 49 · 52 · 54 · 56 · 58 · 61 | 515 · 535 · 555 · 580 · 605 · 625 | 382 · 390 · 399 · 407 · 417 · 427 | — · — · — · — · — · — | ELARA (s/p) |
| LANDO XC FOX [8aaeb553] | mtb | S · M · L · XL | 594.5 · 599 · 608 · 619 | 410 · 430 · 460 · 490 | — · — · — · — | LANDO XC FOX (s/p) |
| Lando HT [9541943a] | mtb | XS · S · M · L | 609 · 613.5 · 618.5 · 633 | 394 · 415 · 445 · 476 | — · — · — · — | Lando HT (s/p) |
| MONZA [f4ff7b3b] | carretera | 45 · 49 · 52 · 54 · 56 · 58 · 61 | 502 · 514 · 535 · 552 · 574 · 597 · 611 | 360 · 367 · 373 · 381 · 389 · 401 · 410 | — · — · — · — · — · — · — | MONZA (s/p) |
| O2 VAM [13f3942e] | carretera | 45 · 49 · 52 · 54 · 56 · 58 · 61 | 502 · 514 · 535 · 552 · 574 · 597 · 611 | 360 · 367 · 373 · 381 · 389 · 401 · 410 | — · — · — · — · — · — · — | O2 VAM (s/p) |
| ONE [622a658e] | carretera | 47 · 52 · 54 · 56 · 58 | 503 · 523 · 542 · 565 · 587 | 390 · 396 · 404 · 412 · 421 | — · — · — · — · — | ONE (s/p) |
| OSTRO VAM [4f98d068] | carretera | 45 · 49 · 52 · 54 · 56 · 58 · 61 | 502 · 503 · 523 · 542 · 565 · 587 · 611 | 360 · 370 · 376 · 384 · 392 · 401 · 409 | — · — · — · — · — · — · — | OSTRO VAM (s/p) |
| SARANA [6d6064b4] | gravel | 49 · 52 · 54 · 56 · 58 | 544 · 558 · 573 · 593 · 613 | 378 · 388 · 398 · 408 · 418 | — · — · — · — · — | SARANA (s/p) |


## Look — con avisos

Diff con bikes.csv: **+56** tallas nuevas, **−0** que desaparecen, **~0** con cambios. Productos candidatos: 17. Métodos: html. Descargas: {'httpx': 0, 'browser': 0, 'cache': 25, 'challenges': 0}.

| Familia | Cat. | Tallas | Stack | Reach | Altura (cm) | Modelos (precio €) |
|---|---|---|---|---|---|---|
| 765 Optimum [fe73f276] | carretera | XS · S · M · L · XL | 534 · 558 · 582 · 606 · 630 | 358 · 368 · 379 · 389 · 399 | — · — · — · — · — | 765 Optimum 105 / Shimano RS-171 (2999); 765 Optimum 105 Di2 / R50D (4250); 765 Optimum Rival AXS / Fulcrum Lite ER (3790) |
| 785 Huez RS Red AXS / Scope Artech 2 [4568d9c7] | carretera | XS · S · M · L · XL | 519.2 · 543.3 · 567.3 · 591.3 · 615.3 | 365.3 · 375.3 · 385.6 · 395.5 · 405.6 | — · — · — · — · — | 785 Huez RS Red AXS / Scope Artech 2 (11990) |
| 785 Huez [3008a8c2] | carretera | XS · S · M · L · XL | 519.2 · 543.3 · 567.3 · 591.3 · 615.3 | 365.3 · 375.3 · 385.6 · 395.5 · 405.6 | — · — · — · — · — | 785 Huez RS Ultegra Di2 / Fulcrum Speed 25 (7490); 785 Huez RS Ultegra Di2 / Fulcrum Speed 42 (7490); 785 Huez Shimano 105 (2990) |
| 795 Blade RS 3 [969d7e46] | carretera | XXS · XS · S · M · L · XL | 486.2 · 501.2 · 525.2 · 549.2 · 573.2 · 597.2 | 361.3 · 371.3 · 381.3 · 391.2 · 401.2 · 411.2 | — · — · — · — · — · — | 795 Blade RS 3 (s/p) |
| G85 Cezal [c3ac1803] | gravel | XS · S · M · L · XL | 547 · 566 · 590 · 614 · 638 | 360 · 370 · 380 · 390 · 400 | — · — · — · — · — | G85 Cezal Force 1x13 / Fulcrum Soniq Carbon 2WF (6499); G85 Cezal GRX 1x12 Mech / Fulcrum Lite GR (3499); G85 Cezal GRX Di2 2x12 / Fulcrum Soniq Carbon 2WF (5799) |

<details><summary>Productos en alcance sin datos</summary>

- https://www.lookcycle.com/es-es/productos/bicis/carretera/altitude/785-huez-rs — sin tabla de geometría en la página
- https://www.lookcycle.com/es-es/productos/bicis/carretera/altitude/785-huez-105-di2-look-r40-tlr — sin tabla de geometría en la página

</details>

Descartados: duplicado (mismo modelo): 4

## Argon 18 — con avisos

Diff con bikes.csv: **+65** tallas nuevas, **−0** que desaparecen, **~0** con cambios. Productos candidatos: 29. Métodos: html. Descargas: {'httpx': 0, 'browser': 0, 'cache': 39, 'challenges': 0}.

| Familia | Cat. | Tallas | Stack | Reach | Altura (cm) | Modelos (precio €) |
|---|---|---|---|---|---|---|
| Anti Matter [4fa23246] | gravel | XS · S · M · L · XL | 508 · 531 · 555 · 580 · 607 | 377 · 384 · 392 · 400 · 409 | — · — · — · — · — | Anti Matter (s/p) |
| Argon 18 Nitrogen [1fa5ee1c] | carretera | XXS · XS · S · M · L · XL | 486 · 508 · 531 · 555 · 580 · 607 | 370 · 377 · 384 · 392 · 400 · 409 | — · — · — · — · — · — | Argon 18 Nitrogen Pro Shimano Dura-Ace Di2 (s/p); Argon 18 Nitrogen Pro Shimano Ultegra Di2 (s/p); Argon 18 Nitrogen Pro Sram Red (s/p); Argon 18 Nitrogen Shimano 105 Di2 (s/p); Argon 18 Nitrogen Shimano Ultegra Di2 (s/p); Argon 18 Nitrogen Sram Force (s/p) |
| Dark Matter [ae9c482a] | gravel | XXS · XS · S · M · L · XL | 520 · 540 · 561 · 582 · 603 · 629 | 370 · 382 · 394 · 406 · 418 · 430 | — · — · — · — · — · — | Dark Matter (s/p) |
| Equation [675158d2] | carretera | XXS · XS · S · M · L · XL | 518 · 537 · 558 · 578 · 600 · 623 | 359 · 369 · 379 · 388 · 397 · 407 | — · — · — · — · — · — | Equation (s/p) |
| Krypton [4e8e333e] | carretera | XXS · XS · S · M · L · XL | 523 · 543 · 563 · 584 · 605 · 628 | 357 · 367 · 377 · 386 · 395 · 406 | — · — · — · — · — · — | Krypton (s/p); Krypton Pro (s/p) |

<details><summary>Tallas rechazadas por la validación</summary>

- Anti Matter XXS: falta stack; falta reach

</details>

<details><summary>Productos en alcance sin datos</summary>

- https://www.argon18.com/en/bikes/road/sum-pro/sram-red-axs — sin tabla de geometría en la página
- https://www.argon18.com/en/bikes/road/sum-pro/shimano-dura-ace-di2 — sin tabla de geometría en la página
- https://www.argon18.com/en/bikes/road/sum-pro/shimano-ultegra-di2-2 — sin tabla de geometría en la página
- https://www.argon18.com/en/bikes/road/sum/sram-force-axs-2 — sin tabla de geometría en la página
- https://www.argon18.com/en/bikes/road/sum/shimano-ultegra-di2-3 — sin tabla de geometría en la página
- https://www.argon18.com/en/bikes/road/sum/shimano-105-di2 — sin tabla de geometría en la página
- https://www.argon18.com/en/bikes/road/sum/sum — sin tabla de geometría en la página
- https://www.argon18.com/en/bikes/gravel/grey-matter/sram-apex-axs-xplr — sin tabla de geometría en la página
- https://www.argon18.com/en/bikes/gravel/grey-matter/sram-apex-xplr — sin tabla de geometría en la página

</details>

<details><summary>Avisos</summary>

- Argon 18 Nitrogen Pro Sram Red: 'J Stack cm' publicado en cm: convertido a mm (×10)
- Argon 18 Nitrogen Pro Sram Red: 'K Reach cm' publicado en cm: convertido a mm (×10)
- Argon 18 Nitrogen Pro Shimano Dura-Ace Di2: 'J Stack cm' publicado en cm: convertido a mm (×10)
- Argon 18 Nitrogen Pro Shimano Dura-Ace Di2: 'K Reach cm' publicado en cm: convertido a mm (×10)
- Argon 18 Nitrogen Pro Shimano Ultegra Di2: 'J Stack cm' publicado en cm: convertido a mm (×10)
- Argon 18 Nitrogen Pro Shimano Ultegra Di2: 'K Reach cm' publicado en cm: convertido a mm (×10)
- Argon 18 Nitrogen Sram Force: 'J Stack cm' publicado en cm: convertido a mm (×10)
- Argon 18 Nitrogen Sram Force: 'K Reach cm' publicado en cm: convertido a mm (×10)
- Argon 18 Nitrogen Shimano Ultegra Di2: 'J Stack cm' publicado en cm: convertido a mm (×10)
- Argon 18 Nitrogen Shimano Ultegra Di2: 'K Reach cm' publicado en cm: convertido a mm (×10)
- Argon 18 Nitrogen Shimano 105 Di2: 'J Stack cm' publicado en cm: convertido a mm (×10)
- Argon 18 Nitrogen Shimano 105 Di2: 'K Reach cm' publicado en cm: convertido a mm (×10)
- Equation: 'J Stack cm' publicado en cm: convertido a mm (×10)
- Equation: 'K Reach S cm' publicado en cm: convertido a mm (×10)
- Krypton Pro: 'J Stack cm' publicado en cm: convertido a mm (×10)
- Krypton Pro: 'K Reach cm' publicado en cm: convertido a mm (×10)
- Krypton: 'J Stack cm' publicado en cm: convertido a mm (×10)
- Krypton: 'K Reach cm' publicado en cm: convertido a mm (×10)
- Anti Matter: 'J Stack cm' publicado en cm: convertido a mm (×10)
- Anti Matter: 'K Reach cm' publicado en cm: convertido a mm (×10)
- Dark Matter: 'J Stack min cm' publicado en cm: convertido a mm (×10)
- Dark Matter: 'K Reach cm' publicado en cm: convertido a mm (×10)

</details>

Descartados: duplicado (mismo modelo): 9
