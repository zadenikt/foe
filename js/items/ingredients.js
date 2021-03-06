
Items.HorseHair = new Item("equin1", "Horse hair");
Items.HorseHair.price = 1;
Items.HorseHair.Short = function() { return "Hair from a horse"; }
Items.HorseHair.Long = function() { return "The hair of a horse, consisting of long fine strands."; }

Items.HorseShoe = new Item("equin2", "Horseshoe");
Items.HorseShoe.price = 1;
Items.HorseShoe.Short = function() { return "A horseshoe"; }
Items.HorseShoe.Long = function() { return "A horseshoe, made of metal."; }

Items.HorseCum = new Item("equin3", "E.Fluid");
Items.HorseCum.price = 2;
Items.HorseCum.Short = function() { return "Sticky equine fluids"; }
Items.HorseCum.Long = function() { return "Sticky equine fluids of uncertain origin, contained in a bottle."; }


Items.Equinium = new TFItem("equin0", "Equinium");
Items.Equinium.price = 7;
Items.Equinium.Short = function() { return "A bottle of Equinium"; }
Items.Equinium.Long = function() { return "A bottle labeled Equinium, with the picture of a horse on it, containing a thick, heady liquid."; }
Items.Equinium.Recipe = [{it: Items.HorseShoe}, {it: Items.HorseHair}, {it: Items.HorseCum}];
// Effects
Items.Equinium.PushEffect(TF.ItemEffects.SetCock, {odds: 0.4, race: Race.horse, str: "a horsecock"});
Items.Equinium.PushEffect(TF.ItemEffects.SetEars, {odds: 0.4, race: Race.horse, str: "equine ears"});
Items.Equinium.PushEffect(TF.ItemEffects.SetTail, {odds: 0.4, race: Race.horse, color: Color.brown, str: "a brown, bushy horse tail"});
Items.Equinium.PushEffect(TF.ItemEffects.SetSheath, {odds: 0.4, value: true, num: 1});
Items.Equinium.PushEffect(TF.ItemEffects.SetIdealCockLen, {odds: 0.5, ideal: 30, max: 1});
Items.Equinium.PushEffect(TF.ItemEffects.SetIdealCockThk, {odds: 0.5, ideal: 6, max: 1});
Items.Equinium.PushEffect(TF.ItemEffects.IncStr, {odds: 0.4, ideal: 30, max: 1});
Items.Equinium.PushEffect(TF.ItemEffects.IncSta, {odds: 0.4, ideal: 30, max: 1});
Items.Equinium.PushEffect(TF.ItemEffects.DecInt, {odds: 0.2, ideal: 8, max: 1});
Items.Equinium.PushEffect(TF.ItemEffects.DecDex, {odds: 0.2, ideal: 8, max: 1});




Items.RabbitFoot = new Item("lago1", "Rabbit foot");
Items.RabbitFoot.price = 1;
Items.RabbitFoot.Short = function() { return "A lucky charm"; }
Items.RabbitFoot.Long = function() { return "A lucky charm in the form of a rabbit's foot."; }

Items.CarrotJuice = new Item("lago2", "Carrot juice");
Items.CarrotJuice.price = 1;
Items.CarrotJuice.Short = function() { return "A bottle of carrot juice"; }
Items.CarrotJuice.Long = function() { return "A bottle containing a deeply orange juice, made from pressed carrots."; }

Items.Lettuce = new Item("lago3", "Lettuce");
Items.Lettuce.price = 1;
Items.Lettuce.Short = function() { return "A leaf of lettuce"; }
Items.Lettuce.Long = function() { return "A leaf of lettuce, sweet, healthy and crunchy."; }

Items.Leporine = new TFItem("lago0", "Leporine");
Items.Leporine.price = 7;
Items.Leporine.Short = function() { return "A bottle of Leporine"; }
Items.Leporine.Long = function() { return "A bottle labeled Leporine, with the picture of a rabbit on it. The fluid within is clear."; }
Items.Leporine.Recipe = [{it: Items.RabbitFoot}, {it: Items.CarrotJuice}, {it: Items.Lettuce}];
// Effects
Items.Leporine.PushEffect(TF.ItemEffects.SetCock, {odds: 0.4, race: Race.rabbit, str: "a bunnycock"});
Items.Leporine.PushEffect(TF.ItemEffects.SetEars, {odds: 0.4, race: Race.rabbit, str: "floppy bunny ears"});
Items.Leporine.PushEffect(TF.ItemEffects.SetTail, {odds: 0.4, race: Race.rabbit, color: Color.white, str: "a white, fluffy bunny tail"});
Items.Leporine.PushEffect(TF.ItemEffects.SetIdealCockLen, {odds: 0.5, ideal: 15, max: 1});
Items.Leporine.PushEffect(TF.ItemEffects.SetIdealCockThk, {odds: 0.5, ideal: 3, max: 1});
Items.Leporine.PushEffect(TF.ItemEffects.IncLib, {odds: 0.4, ideal: 30, max: 1});
Items.Leporine.PushEffect(TF.ItemEffects.IncDex, {odds: 0.4, ideal: 30, max: 1});



Items.Whiskers = new Item("felin1", "Whiskers");
Items.Whiskers.price = 1;
Items.Whiskers.Short = function() { return "A cat's whiskers"; }
Items.Whiskers.Long = function() { return "The whiskers from a cat of some kind."; }

Items.HairBall = new Item("felin2", "Hair ball");
Items.HairBall.price = 1;
Items.HairBall.Short = function() { return "Eww..."; }
Items.HairBall.Long = function() { return "Looks like something a cat coughed up."; }

Items.CatClaw = new Item("felin3", "Cat claw");
Items.CatClaw.price = 1;
Items.CatClaw.Short = function() { return "A claw from a cat"; }
Items.CatClaw.Long = function() { return "Sharp cat claws."; }

Items.Felinix = new TFItem("felin0", "Felinix");
Items.Felinix.price = 7;
Items.Felinix.Short = function() { return "A bottle of Felinix"; }
Items.Felinix.Long = function() { return "A bottle labeled Felinix, with the picture of a cat on it. The fluid within is cloudy."; }
Items.Felinix.Recipe = [{it: Items.Whiskers}, {it: Items.HairBall}, {it: Items.CatClaw}];
// Effects
Items.Felinix.PushEffect(TF.ItemEffects.SetCock, {odds: 0.4, race: Race.cat, str: "a feline cock"});
Items.Felinix.PushEffect(TF.ItemEffects.SetEars, {odds: 0.4, race: Race.cat, str: "fluffy cat ears"});
Items.Felinix.PushEffect(TF.ItemEffects.SetTail, {odds: 0.4, race: Race.cat, color: Color.orange, str: "an orange, flexible feline tail"});
Items.Felinix.PushEffect(TF.ItemEffects.IncDex, {odds: 0.6, ideal: 35, max: 1});
Items.Felinix.PushEffect(TF.ItemEffects.IncCha, {odds: 0.4, ideal: 25, max: 1});
Items.Felinix.PushEffect(TF.ItemEffects.DecSta, {odds: 0.2, ideal: 16, max: 1});
Items.Felinix.PushEffect(TF.ItemEffects.DecInt, {odds: 0.2, ideal: 8, max: 1});



Items.SnakeOil = new Item("rept1", "Oil");
Items.SnakeOil.price = 1;
Items.SnakeOil.Short = function() { return "Snake oil"; }
Items.SnakeOil.Long = function() { return "An oil that could perhaps be used by for massage."; }

Items.LizardScale = new Item("rept2", "L.Scale");
Items.LizardScale.price = 1;
Items.LizardScale.Short = function() { return "Lizard scale"; }
Items.LizardScale.Long = function() { return "A brightly shining scale, polished by the desert sands."; }

Items.LizardEgg = new Item("rept3", "L.Egg");
Items.LizardEgg.price = 2;
Items.LizardEgg.Short = function() { return "Lizard egg"; }
Items.LizardEgg.Long = function() { return "An unfertilized lizard egg. Good for a snack."; }
Items.LizardEgg.Use = function(target) {
	target.AddHPFraction(0.02);
	var parse = { name: target.NameDesc(), s: target == player ? "" : "s" };
	Text.AddOutput("[name] eat[s] a lizard egg. It is slightly invigorating.", parse);
	Text.Newline();
	
	return {consume: true};
}

Items.Lacertium = new TFItem("rept0", "Lacertium");
Items.Lacertium.price = 8;
Items.Lacertium.Short = function() { return "A bottle of Lacertium"; }
Items.Lacertium.Long = function() { return "A bottle labeled Lacertium, with the picture of a lizard on it. The fluid within is thick and oily."; }
Items.Lacertium.Recipe = [{it: Items.SnakeOil}, {it: Items.LizardScale}, {it: Items.LizardEgg}];
// Effects
Items.Lacertium.PushEffect(TF.ItemEffects.SetCock, {odds: 0.4, race: Race.lizard, str: "a lizard cock"});
Items.Lacertium.PushEffect(function(target) {
	var cocks = target.AllCocks();
	if(cocks.length == 1 && cocks[0].race == Race.lizard && Math.random() < 0.1) {
		cocks.push(cocks[0].Clone());
		Text.AddOutput("[Poss] reptilian cock splits in two identical dicks!", { Poss: target.Possessive() });
		Text.Newline();
	}
});
Items.Lacertium.PushEffect(TF.ItemEffects.SetEars, {odds: 0.4, race: Race.lizard, str: "lizard nubs"});
Items.Lacertium.PushEffect(TF.ItemEffects.SetTail, {odds: 0.4, race: Race.lizard, color: Color.green, str: "a green, flexible reptilian tail"});
Items.Lacertium.PushEffect(TF.ItemEffects.SetSheath, {odds: 0.2, value: false, num: 1});
Items.Lacertium.PushEffect(TF.ItemEffects.IncInt, {odds: 0.4, ideal: 30, max: 1});
Items.Lacertium.PushEffect(TF.ItemEffects.IncDex, {odds: 0.2, ideal: 25, max: 1});
Items.Lacertium.PushEffect(TF.ItemEffects.IncCha, {odds: 0.3, ideal: 28, max: 1});
Items.Lacertium.PushEffect(TF.ItemEffects.DecStr, {odds: 0.2, ideal: 16, max: 1});



// TODO: GOAT TF

Items.GoatMilk = new Item("goat1", "G.Milk");
Items.GoatMilk.price = 2;
Items.GoatMilk.Short = function() { return "Goat milk"; }
Items.GoatMilk.Long = function() { return "A bottle of goat milk."; }
Items.GoatMilk.Use = function(target) {
	target.AddHPFraction(0.02);
	var parse = { name: target.NameDesc(), s: target == player ? "" : "s" };
	Text.AddOutput("[name] drink[s] a bottle of milk. It is slightly invigorating.", parse);
	Text.Newline();
	
	return {consume: true};
}


Items.Ovis = new TFItem("ovis0", "Ovis");
Items.Ovis.price = 8;
Items.Ovis.Short = function() { return "A bottle of Ovis"; }
Items.Ovis.Long = function() { return "A bottle labeled Ovis, with the picture of a sheep on it. The fluid within is milky white."; }
Items.Ovis.Recipe = [{it: Items.SheepMilk}, {it: Items.Ramshorn}, {it: Items.FreshGrass}];
// Effects
Items.Ovis.PushEffect(TF.ItemEffects.SetEars, {odds: 0.4, race: Race.sheep, str: "sheep ears"});
Items.Ovis.PushEffect(TF.ItemEffects.SetTail, {odds: 0.4, race: Race.sheep, color: Color.white, str: "a short ovine tail"});
Items.Ovis.PushEffect(TF.ItemEffects.SetSheath, {odds: 0.2, value: false, num: 1});
Items.Ovis.PushEffect(TF.ItemEffects.SetHorn, {odds: 0.4, race: Race.sheep, color: Color.black, count: 2, str: "a pair of sheep horns" });
Items.Ovis.PushEffect(TF.ItemEffects.IncSpi, {odds: 0.4, ideal: 30, max: 1});
Items.Ovis.PushEffect(TF.ItemEffects.IncCha, {odds: 0.3, ideal: 30, max: 1});
Items.Ovis.PushEffect(TF.ItemEffects.DecStr, {odds: 0.2, ideal: 15, max: 1});
Items.Ovis.PushEffect(TF.ItemEffects.DecInt, {odds: 0.2, ideal: 15, max: 1});

Items.SheepMilk = new Item("ovis1", "S.Milk");
Items.SheepMilk.price = 2;
Items.SheepMilk.Short = function() { return "Sheep milk"; }
Items.SheepMilk.Long = function() { return "A bottle of sheep milk."; }
Items.SheepMilk.Use = function(target) {
	target.AddHPFraction(0.02);
	var parse = { name: target.NameDesc(), s: target == player ? "" : "s" };
	Text.AddOutput("[name] drink[s] a bottle of milk. It is slightly invigorating.", parse);
	Text.Newline();
	
	return {consume: true};
}
Items.Ramshorn = new Item("ovis2", "Ramshorn");
Items.Ramshorn.price = 0;
Items.Ramshorn.Short = function() { return "Ramshorn"; }
Items.Ramshorn.Long = function() { return "A curled horn from a sheep."; }



Items.CowMilk = new Item("bov1", "Milk");
Items.CowMilk.price = 2;
Items.CowMilk.Short = function() { return "Cow milk"; }
Items.CowMilk.Long = function() { return "A bottle of ordinary cow milk."; }
Items.CowMilk.Use = function(target) {
	target.AddHPFraction(0.02);
	var parse = { name: target.NameDesc(), s: target == player ? "" : "s" };
	Text.AddOutput("[name] drink[s] a bottle of milk. It is slightly invigorating.", parse);
	Text.Newline();
	
	return {consume: true};
}
Items.CowBell = new Item("bov2", "Cowbell");
Items.CowBell.price = 2;
Items.CowBell.Short = function() { return "A cowbell"; }
Items.CowBell.Long = function() { return "A small bell on a string, used to call cows."; }

Items.FreshGrass = new Item("bov3", "Grass");
Items.FreshGrass.price = 0;
Items.FreshGrass.Short = function() { return "Fresh green grass"; }
Items.FreshGrass.Long = function() { return "A handful of green grass."; }

Items.Bovia = new TFItem("bov0", "Bovia");
Items.Bovia.price = 8;
Items.Bovia.Short = function() { return "A bottle of Bovia"; }
Items.Bovia.Long = function() { return "A bottle labeled Bovia, with the picture of a cow on it. The fluid within is milky white."; }
Items.Bovia.Recipe = [{it: Items.CowMilk}, {it: Items.CowBell}, {it: Items.FreshGrass}];
// Effects
Items.Bovia.PushEffect(TF.ItemEffects.SetCock, {odds: 0.4, race: Race.cow, str: "a bovine cock"});
Items.Bovia.PushEffect(TF.ItemEffects.SetEars, {odds: 0.4, race: Race.cow, str: "bovine ears"});
Items.Bovia.PushEffect(TF.ItemEffects.SetTail, {odds: 0.4, race: Race.cow, color: Color.black, str: "a long bovine tail, ending in a tuft of black hair"});
Items.Bovia.PushEffect(TF.ItemEffects.SetHorn, {odds: 0.4, race: Race.cow, color: Color.black, str: "a pair of strong bovine horns!", count: 2});
Items.Bovia.PushEffect(function(target) {
	var parse = { Poss: target.Possessive() };
	if(target.FirstVag() || (target.BiggestBreasts() && target.BiggestBreasts().size.Get() > 5)) {
		var breasts = target.AllBreastRows();
		for(var i = 0; i < breasts.length; i++) {
			var diff = breasts[i].size.IncreaseStat(40, Math.random() * 5);
			if(diff) {
				Text.AddOutput("[Poss] breasts grow larger by " + diff + "cm.", parse);
				Text.Newline();
				break;
			}
			if(Math.random() < 0.5) {
				var diff = breasts[i].lactationRate.IdealStat(10, 1);
				if(diff) {
					Text.AddOutput("[Poss] breasts starts to lactate more than before.", parse);
					Text.Newline();
					break;
				}
			}
		}
	}
});
Items.Bovia.PushEffect(TF.ItemEffects.IncStr, {odds: 0.5, ideal: 35, max: 1});
Items.Bovia.PushEffect(TF.ItemEffects.IncSta, {odds: 0.4, ideal: 30, max: 1});
Items.Bovia.PushEffect(TF.ItemEffects.IncCha, {odds: 0.3, ideal: 20, max: 1});
Items.Bovia.PushEffect(TF.ItemEffects.DecInt, {odds: 0.2, ideal: 10, max: 1});



Items.CanisRoot = new Item("dog1", "Canis root");
Items.CanisRoot.price = 0;
Items.CanisRoot.Short = function() { return "A root"; }
Items.CanisRoot.Long = function() { return "A strange, knotty root."; }

Items.DogBone = new Item("dog2", "Dog bone");
Items.DogBone.price = 1;
Items.DogBone.Short = function() { return "A dog bone"; }
Items.DogBone.Long = function() { return "A bone, chewed to the marrow. It looks like it has been buried at least once."; }

Items.DogBiscuit = new Item("dog3", "Biscuit");
Items.DogBiscuit.price = 3;
Items.DogBiscuit.Short = function() { return "A dog biscuit"; }
Items.DogBiscuit.Long = function() { return "A biscuit, commonly given to dogs as a reward. It doesn't taste very good."; }
Items.DogBiscuit.Use = function(target) {
	target.AddHPFraction(0.02);
	var parse = { name: target.NameDesc(), s: target == player ? "" : "s" };
	Text.AddOutput("[name] chew[s] on a dog biscuit. It is slightly invigorating.", parse);
	Text.Newline();
	
	return {consume: true};
}

Items.Canis = new TFItem("dog0", "Canis");
Items.Canis.price = 8;
Items.Canis.Short = function() { return "A bottle of Canis"; }
Items.Canis.Long = function() { return "A bottle labeled Canis, with the picture of a dog on it. The fluid within is opaque, and slightly reddish."; }
Items.Canis.Recipe = [{it: Items.CanisRoot}, {it: Items.DogBone}, {it: Items.DogBiscuit}];
// Effects
Items.Canis.PushEffect(TF.ItemEffects.SetCock, {odds: 0.4, race: Race.dog, str: "a canid cock"});
Items.Canis.PushEffect(TF.ItemEffects.SetKnot, {odds: 0.4, value: true, num: 1});
Items.Canis.PushEffect(TF.ItemEffects.SetSheath, {odds: 0.4, value: true, num: 1});
Items.Canis.PushEffect(TF.ItemEffects.RemHorn, {odds: 0.2, count: 2});
Items.Canis.PushEffect(TF.ItemEffects.SetEars, {odds: 0.4, race: Race.dog, str: "canid ears"});
Items.Canis.PushEffect(TF.ItemEffects.SetTail, {odds: 0.4, race: Race.dog, color: Color.brown, str: "a brown, fluffy dog tail!"});
Items.Canis.PushEffect(TF.ItemEffects.IncDex, {odds: 0.4, ideal: 30, max: 1});
Items.Canis.PushEffect(TF.ItemEffects.IncSpi, {odds: 0.4, ideal: 30, max: 1});
Items.Canis.PushEffect(TF.ItemEffects.IncCha, {odds: 0.3, ideal: 25, max: 1});
Items.Canis.PushEffect(TF.ItemEffects.DecInt, {odds: 0.2, ideal: 10, max: 1});



Items.WolfFang = new Item("wolf2", "Fang");
Items.WolfFang.price = 1;
Items.WolfFang.Short = function() { return "A canid fang"; }
Items.WolfFang.Long = function() { return "A fang from some form of canid predator."; }

Items.WolfPelt = new Item("wolf3", "Wolf pelt");
Items.WolfPelt.price = 3;
Items.WolfPelt.Short = function() { return "A wolf pelt"; }
Items.WolfPelt.Long = function() { return "The rough pelt of a wolf."; }

Items.Lobos = new TFItem("wolf0", "Lobos");
Items.Lobos.price = 8;
Items.Lobos.Short = function() { return "A bottle of Lobos"; }
Items.Lobos.Long = function() { return "A bottle labeled Lobos with the picture of a wolf on it. The fluid within is opaque, and dullish gray."; }
Items.Lobos.Recipe = [{it: Items.CanisRoot}, {it: Items.WolfFang}, {it: Items.WolfPelt}];
// Effects
Items.Lobos.PushEffect(TF.ItemEffects.SetCock, {odds: 0.4, race: Race.wolf, str: "a wolf cock"});
Items.Lobos.PushEffect(TF.ItemEffects.SetKnot, {odds: 0.4, value: true, num: 1});
Items.Lobos.PushEffect(TF.ItemEffects.SetSheath, {odds: 0.4, value: true, num: 1});
Items.Lobos.PushEffect(TF.ItemEffects.RemHorn, {odds: 0.2, count: 2});
Items.Lobos.PushEffect(TF.ItemEffects.SetEars, {odds: 0.4, race: Race.wolf, str: "wolf ears"});
Items.Lobos.PushEffect(TF.ItemEffects.SetTail, {odds: 0.4, race: Race.wolf, color: Color.gray, str: "a gray, fluffy wolf tail!"});
Items.Lobos.PushEffect(TF.ItemEffects.IncStr, {odds: 0.4, ideal: 30, max: 1});
Items.Lobos.PushEffect(TF.ItemEffects.IncSta, {odds: 0.4, ideal: 30, max: 1});
Items.Lobos.PushEffect(TF.ItemEffects.IncDex, {odds: 0.4, ideal: 30, max: 1});
Items.Lobos.PushEffect(TF.ItemEffects.IncSpi, {odds: 0.4, ideal: 30, max: 1});



Items.FoxBerries = new Item("fox2", "Fox berries");
Items.FoxBerries.price = 1;
Items.FoxBerries.Short = function() { return "A handful of fox berries"; }
Items.FoxBerries.Long = function() { return "A handful of fox berries. Possibly toxic."; }

Items.Foxglove = new Item("fox3", "Foxglove");
Items.Foxglove.price = 0;
Items.Foxglove.Short = function() { return "A foxglove flower"; }
Items.Foxglove.Long = function() { return "A foxglove flower, commonly found on meadows."; }

Items.Vulpinix = new TFItem("fox0", "Vulpinix");
Items.Vulpinix.price = 8;
Items.Vulpinix.Short = function() { return "A bottle of Vulpinix"; }
Items.Vulpinix.Long = function() { return "A bottle labeled Vulpinix, with the picture of a fox on it. The fluid within is opaque, and bright red."; }
Items.Vulpinix.Recipe = [{it: Items.CanisRoot}, {it: Items.FoxBerries}, {it: Items.Foxglove}];
// Effects
Items.Vulpinix.PushEffect(TF.ItemEffects.SetCock, {odds: 0.4, race: Race.fox, str: "a vulpine cock"});
Items.Vulpinix.PushEffect(TF.ItemEffects.SetKnot, {odds: 0.4, value: true, num: 1});
Items.Vulpinix.PushEffect(TF.ItemEffects.SetSheath, {odds: 0.4, value: true, num: 1});
Items.Vulpinix.PushEffect(TF.ItemEffects.RemHorn, {odds: 0.2, count: 2});
Items.Vulpinix.PushEffect(TF.ItemEffects.SetEars, {odds: 0.4, race: Race.fox, str: "vulpine ears"});
Items.Vulpinix.PushEffect(TF.ItemEffects.SetTail, {odds: 0.4, race: Race.fox, color: Color.red, str: "a red, fluffy fox tail!"});
Items.Vulpinix.PushEffect(TF.ItemEffects.IncSta, {odds: 0.4, ideal: 25, max: 1});
Items.Vulpinix.PushEffect(TF.ItemEffects.IncDex, {odds: 0.4, ideal: 35, max: 1});
Items.Vulpinix.PushEffect(TF.ItemEffects.IncInt, {odds: 0.4, ideal: 30, max: 1});
Items.Vulpinix.PushEffect(TF.ItemEffects.DecStr, {odds: 0.2, ideal: 10, max: 1});



Items.CorruptPlant = new Item("demon1", "Corrupt plant");
Items.CorruptPlant.price = 0;
Items.CorruptPlant.Short = function() { return "A strange plant"; }
Items.CorruptPlant.Long = function() { return "A strange plant, corrupted by some evil power."; }

Items.BlackGem = new Item("demon2", "Black gem");
Items.BlackGem.price = 20;
Items.BlackGem.Short = function() { return "An obsidian gem"; }
Items.BlackGem.Long = function() { return "A black gemstone. It is slightly warm to the touch."; }

Items.CorruptSeed = new Item("demon3", "Corrupt seed");
Items.CorruptSeed.price = 0;
Items.CorruptSeed.Short = function() { return "Corrupted seed"; }
Items.CorruptSeed.Long = function() { return "The semen of some corrupted creature, stored in a vial."; }

Items.DemonSeed = new Item("demon4", "Demon seed");
Items.DemonSeed.price = 0;
Items.DemonSeed.Short = function() { return "Demonic seed"; }
Items.DemonSeed.Long = function() { return "A vial filled with demon cum."; }
Items.DemonSeed.Use = function(target) {
	target.AddLustFraction(0.1);
	target.RestoreCum(2);
	var parse = {
		name: target.NameDesc(),
		s: target == player ? "" : "s",
		hisher : target.hisher()
	};
	Text.AddOutput("[name] swallow[s] a vial of demonic seed. Lust courses through [hisher] veins.", parse);
	Text.Newline();
	return {consume: true};
}

Items.Infernum = new TFItem("demon0", "Infernum");
Items.Infernum.price = 15;
Items.Infernum.Short = function() { return "A bottle of Infernum"; }
Items.Infernum.Long = function() { return "A bottle labeled Infernum, with the picture of a demon on it. The fluid within is a thick red sludge, tainted with black bubbles."; }
Items.Infernum.Recipe = [{it: Items.CorruptPlant}, {it: Items.BlackGem}, {it: Items.CorruptSeed}];
// Effects
Items.Infernum.PushEffect(TF.ItemEffects.SetCock, {odds: 0.4, race: Race.demon, str: "a demon cock"});
Items.Infernum.PushEffect(TF.ItemEffects.SetTail, {odds: 0.4, race: Race.demon, color: Color.red, str: "a red, spaded demon tail!"});
Items.Infernum.PushEffect(TF.ItemEffects.SetHorn, {odds: 0.4, race: Race.demon, color: Color.red, count: 2, str: "a pair of demon horns" });
Items.Infernum.PushEffect(TF.ItemEffects.IncSta, {odds: 0.4, ideal: 25, max: 1});
Items.Infernum.PushEffect(TF.ItemEffects.IncDex, {odds: 0.4, ideal: 25, max: 1});
Items.Infernum.PushEffect(TF.ItemEffects.IncInt, {odds: 0.4, ideal: 30, max: 1});
Items.Infernum.PushEffect(TF.ItemEffects.IncLib, {odds: 0.4, ideal: 35, max: 1});


Items.Hummus = new Item("human1", "Hummus");
Items.Hummus.price = 2;
Items.Hummus.Short = function() { return "Hummus. Looks edible"; }
Items.Hummus.Long = function() { return "Hummus: a foodlike substance."; }
Items.Hummus.Use = function(target) {
	target.AddHPFraction(0.03);
	var parse = { name: target.NameDesc(), s: target == player ? "" : "s" };
	Text.AddOutput("[name] eat[s] some hummus. It is slightly invigorating.", parse);
	Text.Newline();
	return {consume: true};
}

Items.SpringWater = new Item("human2", "Spring water");
Items.SpringWater.price = 1;
Items.SpringWater.Short = function() { return "A vial of clear water"; }
Items.SpringWater.Long = function() { return "A vial of pure spring water."; }

Items.BloodVial = new Item("human3", "Blood");
Items.BloodVial.price = 0;
Items.BloodVial.Short = function() { return "A vial of blood"; }
Items.BloodVial.Long = function() { return "A vial of red blood."; }

Items.Homos = new TFItem("human0", "Homos");
Items.Homos.price = 25;
Items.Homos.Short = function() { return "A bottle of Homos"; }
Items.Homos.Long = function() { return "A bottle labeled Homos, with the picture of a regular human on it. The fluid within is clear and colorless, like water."; }
Items.Homos.Recipe = [{it: Items.Hummus}, {it: Items.SpringWater}, {it: Items.BloodVial}];
// Effects
Items.Homos.PushEffect(TF.ItemEffects.SetCock, {odds: 0.4, race: Race.human, str: "a human cock"});
Items.Homos.PushEffect(TF.ItemEffects.RemHorn, {odds: 0.6, count: 2});
Items.Homos.PushEffect(TF.ItemEffects.SetEars, {odds: 0.6, race: Race.human, str: "human ears"});
Items.Homos.PushEffect(TF.ItemEffects.SetSheath, {odds: 0.4, value: false, num: 1});
Items.Homos.PushEffect(TF.ItemEffects.SetKnot, {odds: 0.4, value: false, num: 1});
Items.Homos.PushEffect(TF.ItemEffects.RemTail, {odds: 0.6, count: 1});
Items.Homos.PushEffect(TF.ItemEffects.RemWings, {odds: 0.6, count: 2});



Items.Feather = new Item("avian1", "Feather");
Items.Feather.price = 1;
Items.Feather.Short = function() { return "A bird feather"; }
Items.Feather.Long = function() { return "The feather of some kind of bird."; }

Items.Trinket = new Item("avian2", "Trinket");
Items.Trinket.price = 1;
Items.Trinket.Short = function() { return "A shiny trinket"; }
Items.Trinket.Long = function() { return "A shiny trinket, pretty but with little to no value."; }

Items.FruitSeed = new Item("avian3", "Fruit seed");
Items.FruitSeed.price = 0;
Items.FruitSeed.Short = function() { return "Seed from a fruit"; }
Items.FruitSeed.Long = function() { return "The seed of a fruit or berry of some kind."; }

Items.Avia = new TFItem("avian0", "Avia");
Items.Avia.price = 25;
Items.Avia.Short = function() { return "A bottle of Avia"; }
Items.Avia.Long = function() { return "A bottle labeled Avia, with the picture of a bird on it. The fluid within is a clear, bright blue."; }
Items.Avia.Recipe = [{it: Items.Feather}, {it: Items.Trinket}, {it: Items.FruitSeed}];
// Effects
Items.Avia.PushEffect(TF.ItemEffects.SetCock, {odds: 0.4, race: Race.avian, str: "an avian cock"});
Items.Avia.PushEffect(TF.ItemEffects.RemHorn, {odds: 0.2, count: 2});
Items.Avia.PushEffect(TF.ItemEffects.SetSheath, {odds: 0.2, value: false, num: 1});
Items.Avia.PushEffect(TF.ItemEffects.SetKnot, {odds: 0.2, value: false, num: 1});
Items.Avia.PushEffect(TF.ItemEffects.SetWings, {odds: 0.4, race: Race.avian, color: Color.brown, count: 2, str: "a pair of avain wings" });


Items.MAntenna = new Item("moth1", "M.Feeler");
Items.MAntenna.price = 1;
Items.MAntenna.Short = function() { return "A moth feeler"; }
Items.MAntenna.Long = function() { return "The feeler from some kind of moth."; }

Items.MWing = new Item("moth2", "M.Wing");
Items.MWing.price = 1;
Items.MWing.Short = function() { return "A moth wing"; }
Items.MWing.Long = function() { return "A flimsy moth wing, looks very fragile."; }

Items.Lepida = new TFItem("moth0", "Lepida");
Items.Lepida.price = 25;
Items.Lepida.Short = function() { return "A bottle of Lepida"; }
Items.Lepida.Long = function() { return "A bottle labeled Lepida, with the picture of a moth on it. The fluid within is a deep purple."; }
Items.Lepida.Recipe = [{it: Items.MAntenna}, {it: Items.MWing}, {it: Items.FruitSeed}];
// Effects
Items.Lepida.PushEffect(TF.ItemEffects.SetAntenna, {odds: 0.4, race: Race.moth, color: Color.purple, count: 2, str: "a pair of moth-like feelers" });
Items.Lepida.PushEffect(TF.ItemEffects.RemHorn, {odds: 0.2, count: 2});
Items.Lepida.PushEffect(TF.ItemEffects.SetSheath, {odds: 0.1, value: false, num: 1});
Items.Lepida.PushEffect(TF.ItemEffects.SetKnot, {odds: 0.1, value: false, num: 1});
Items.Lepida.PushEffect(TF.ItemEffects.SetWings, {odds: 0.4, race: Race.moth, color: Color.purple, count: 2, str: "a pair of insect wings" });


Items.Stinger = new Item("scorp1", "Stinger");
Items.Stinger.price = 2;
Items.Stinger.Short = function() { return "A stinger"; }
Items.Stinger.Long = function() { return "The stinger from some kind of insect."; }

Items.SVenom = new Item("scorp2", "S.Venom");
Items.SVenom.price = 3;
Items.SVenom.Short = function() { return "A vial of venom"; }
Items.SVenom.Long = function() { return "A tiny vial of unprocessed scorpion venom."; }

Items.SClaw = new Item("scorp3", "S.Claw");
Items.SClaw.price = 2;
Items.SClaw.Short = function() { return "A black claw"; }
Items.SClaw.Long = function() { return "A black, menacing-looking scorpion claw."; }

Items.Scorpius = new TFItem("scorp0", "Scorpius");
Items.Scorpius.price = 25;
Items.Scorpius.Short = function() { return "A bottle of Scorpius"; }
Items.Scorpius.Long = function() { return "A bottle labeled Scorpius, with the picture of a scorpion on it. The fluid within is a pitch black."; }
Items.Scorpius.Recipe = [{it: Items.Stinger}, {it: Items.SVenom}, {it: Items.SClaw}];
// Effects
Items.Scorpius.PushEffect(TF.ItemEffects.SetTail, {odds: 0.4, race: Race.scorpion, color: Color.black, str: "a black, segmented scorpion tail!"});
Items.Scorpius.PushEffect(TF.ItemEffects.SetSheath, {odds: 0.1, value: false, num: 1});
Items.Scorpius.PushEffect(TF.ItemEffects.SetKnot, {odds: 0.1, value: false, num: 1});
Items.Scorpius.PushEffect(TF.ItemEffects.RemWings, {odds: 0.6, count: 2});
Items.Scorpius.PushEffect(TF.ItemEffects.IncDex, {odds: 0.4, ideal: 35, max: 1});
Items.Scorpius.PushEffect(TF.ItemEffects.IncInt, {odds: 0.4, ideal: 30, max: 1});
Items.Scorpius.PushEffect(TF.ItemEffects.DecStr, {odds: 0.2, ideal: 20, max: 1});



Items.Virilium = new TFItem("sex0", "Virilium");
Items.Virilium.price = 100;
Items.Virilium.Short = function() { return "A bottle of Virilium"; }
Items.Virilium.Long = function() { return "A bottle of potency-enhancing Virilium."; }
Items.Virilium.Recipe = [{it: Items.Equinium}, {it: Items.Leporine}, {it: Items.Lobos}];
// Effects
Items.Virilium.PushEffect(TF.ItemEffects.IncLib, {odds: 0.3, ideal: 40, max: 2});
Items.Virilium.PushEffect(TF.ItemEffects.IncCha, {odds: 0.2, ideal: 40, max: 2});
Items.Virilium.PushEffect(TF.ItemEffects.SetBalls, {odds: 0.1, ideal: 2, count: 2});
Items.Virilium.PushEffect(function(target) {
	var parse = {
		name  : target.nameDesc(),
		heshe : target.heshe(),
		is    : target.is()
	};
	target.AddLustFraction(0.5);
	target.RestoreCum(10);
	
	Text.Add("A shiver runs through [name] as [heshe] [is] hit by a wave of lust!", parse);
	Text.NL();
});
Items.Virilium.PushEffect(function(target) {
	var parse = {
		Poss: target.Possessive(),
		ballsDesc : function() { return target.BallsDesc(); },
		s      : target.HasBalls() ? "s" : "",
		notS   : target.HasBalls() ? "" : "s",
		itThey : target.HasBalls() ? "they" : "it"
	};
	if(target.HasBalls() && Math.random() < 0.4) {
		var res = target.Balls().size.IncreaseStat(10, 1);
		if(res > 0) {
			Text.Add("[Poss] balls have grown in size to [ballsDesc]!", parse);
			Text.NL();
		}
	}
	if((target.HasBalls() || target.FirstCock()) && Math.random() < 0.4) {
		var res = target.Balls().cumCap.IncreaseStat(30, 1);
		if(res > 0) {
			Text.Add("[Poss] [ballsDesc] churn[notS] as [itThey] adjust[notS] to accomodate more cum.", parse);
			Text.NL();
		}
	}
	if((target.HasBalls() || target.FirstCock()) && Math.random() < 0.3) {
		var res = target.Balls().cumProduction.IncreaseStat(3, .5, true);
		if(res > 0) {
			Text.Add("[Poss] [ballsDesc] churn[notS] as [itThey] become[s] able to produce more cum!", parse);
			Text.NL();
		}
	}
	// TODO: parse
	if((target.HasBalls() || target.FirstCock()) && Math.random() < 0.2) {
		var res = target.Balls().fertility.IncreaseStat(.7, .1, true);
	}
	Text.Flush();
});
// TODO: parse
Items.Virilium.PushEffect(function(target) {
	var parse = {};
	if(Math.random() < 0.1) {
		var res = target.body.muscleTone.IncreaseStat(.7, .1, true);
	}
	if(Math.random() < 0.1) {
		var res = target.body.femininity.DecreaseStat(-1, .1, true);
	}
	Text.Flush();
});



Items.Fertilium = new TFItem("sex1", "Fertilium");
Items.Fertilium.price = 100;
Items.Fertilium.Short = function() { return "A bottle of Fertilium"; }
Items.Fertilium.Long = function() { return "A bottle of fertility-enhancing Fertilium."; }
Items.Fertilium.Recipe = [{it: Items.Felinix}, {it: Items.Leporine}, {it: Items.Bovia}];
// Effects
Items.Fertilium.PushEffect(TF.ItemEffects.IncLib, {odds: 0.3, ideal: 40, max: 2});
Items.Fertilium.PushEffect(TF.ItemEffects.IncCha, {odds: 0.2, ideal: 40, max: 2});
Items.Fertilium.PushEffect(TF.ItemEffects.RemBalls, {odds: 0.1, ideal: 0, count: 2});
Items.Fertilium.PushEffect(function(target) {
	var parse = {
		name  : target.nameDesc(),
		heshe : target.heshe(),
		is    : target.is()
	};
	target.AddLustFraction(0.7);
	
	Text.Add("A shiver runs through [name] as [heshe] [is] hit by a wave of lust!", parse);
	Text.NL();
});
// TODO: parse
Items.Fertilium.PushEffect(function(target) {
	var parse = {};
	if(Math.random() < 0.15) {
		var res = target.pregHandler.gestationRate.IncreaseStat(2, .2, true);
	}
	if(Math.random() < 0.2) {
		var res = target.pregHandler.fertility.IncreaseStat(.7, .1, true);
	}
	Text.Flush();
});
// TODO: parse
Items.Fertilium.PushEffect(function(target) {
	var parse = {};
	if(Math.random() < 0.1) {
		var res = target.body.muscleTone.DecreaseStat(.0, .1, true);
	}
	if(Math.random() < 0.1) {
		var res = target.body.femininity.IncreaseStat(1, .1, true);
	}
	Text.Flush();
});
