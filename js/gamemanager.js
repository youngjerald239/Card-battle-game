let GameManager = {
    setGameStart: function(classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer:function(classType) {
        switch (classType) {
            case "Hero":
                player = new Player(classType, 350, 50, 300, 200, 200);
                break;
            case "Warrior":
                player = new Player(classType, 200, 0, 200, 100, 50);
                break;
            case "Rouge":
                player = new Player(classType, 100, 0, 100, 150, 350);
                break;
            case "Mage":
                player = new Player(classType, 80, 100, 200, 200, 50);
                break;
            case "Healer":
                player = new Player(classType, 100, 150, 80, 200, 50);
                break;
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="img/avatar-player/' + 
        classType.toLowerCase() + '.jpg" class="img-avatar"><div><h3>' + classType +
         '</h3><p class="health-player">Health: '+ player.health +'</p><p>Mana: ' + player.mana +
         '</p><p>Strength: ' + player.strength + '</p><p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p></div>';
         
    },
    setPreFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>task: Find enemies!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for enemies!</a>';
        getArena.style.visibility = "visible";
    },
    setFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        //Create enemies!
        let enemy00 = new Enemy("Zombie", 100, 0, 50, 100, 100);
        let enemy01 = new Enemy("Orc", 200, 0, 150, 80, 150);
        let enemy02 = new Enemy("Evil Butterfly", 80, 100, 200, 200, 50 )
        let enemy03 = new Enemy("Demon", 250, 0, 200, 100, 50)
        let enemy04 = new Enemy("Ocean King", 500, 150, 150, 200, 200)
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(5));
        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy00;
            break;
            case 1:
                enemy = enemy01;
                break;
            case 2:
                enemy = enemy02;
            case 3:
                enemy = enemy03;
            break;
            case 4:
                enemy = enemy04;
            break;
        }
        getHeader.innerHTML = '<p>Task:Choose your Move!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
        getEnemy.innerHTML = '<img src="img/avatar-enemies/' + 
        enemy.enemyType.toLowerCase() + '.jpg" alt="' + enemy.enemyType + '" class="img-avatar"><div><h3>' + enemy.enemyType +
         '</h3><p class="health-enemy">Health: '+ enemy.health +'</p><p>Mana: ' + enemy.mana +
         '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>';
    }
}