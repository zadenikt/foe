/*
 * Pregnancy handler
 */

function PregnancyHandler(entity, storage) {
	this.entity = entity;
	
	this.gestationRate = 1;
	this.fertility     = new Stat(0.3);
	
	if(storage) this.FromStorage(storage);
}

PregnancyHandler.Slot = {
	Vag  : 0,
	Butt : 999
};

PregnancyHandler.prototype.ToStorage = function() {
	var storage = {
		gr : this.gestationRate.toFixed(2),
		f  : this.fertility.base.toFixed(2)
	};
	
	var womb = [];
	
	var vags = entity.AllVags();
	for(var i = 0; i < vags.length; ++i) {
		var w = vags[i].womb;
		if(w && w.pregnant) {
			womb.push({
				slot : PregnancyHandler.Slot.Vag + i,
				litS : w.litterSize,
				litR : w.litterRace
			});
		}
	}
	var w = entity.Butt().womb;
	if(w && w.pregnant) {
		womb.push({
			slot : PregnancyHandler.Slot.Butt,
			litS : w.litterSize,
			litR : w.litterRace
		});
	}
	
	if(womb.length > 0)
		storage.womb = womb;
	
	return storage;
}

PregnancyHandler.prototype.FromStorage = function(storage) {
	if(storage.gr) this.gestationRate  = parseFloat(storage.gr);
	if(storage.f)  this.fertility.base = parseFloat(storage.f);
	
	if(storage.womb) {
		var vags = entity.AllVags();
		
		for(var i = 0; i < storage.womb.length; ++i) {
			var w    = storage.womb[i];
			var slot = parseInt(w.slot);
			var wPtr = null;
			if(slot >= PregnancyHandler.Slot.Vag && slot < PregnancyHandler.Slot.Butt) {
				var idx = slot - PregnancyHandler.Slot.Vag;
				if(idx >= 0 && idx < vags.length)
					wPtr = vags[idx];
			}
			else if(slot == PregnancyHandler.Slot.Butt)
				wPtr = entity.Butt().womb;
			
			if(wPtr) {
				wPtr.litterSize = parseInt(w.litS)  || wPtr.litterSize;
				wPtr.litterRace = parseInt(w.litR)  || wPtr.litterRace;
				wPtr.pregnant   = true;
				wPtr.progress   = parseFloat(w.prog);
			}
		}
	}
}

/*
 * opts:
 * 	slot   := PregnancyHandler.Slot
 * 	mother := Entity
 * 	father := Entity
 * 	num    := 1,2,3...
 * 	time   := time to birth in hours
 */
PregnancyHandler.prototype.Impregnate = function(opts) {
	opts = opts || {};
	var mother = opts.mother || this.entity;
	var father = opts.father;
	
	var slot = opts.slot || PregnancyHandler.Slot.Vag;
	var womb = null;
	if     (slot <  PregnancyHandler.Slot.Butt) womb = mother.AllVags()[slot].womb;
	else if(slot == PregnancyHandler.Slot.Butt) womb = mother.Butt().womb;
	
	if(womb == null)  return false;
	if(womb.pregnant) return false;
	
	// TODO: Check for sterility, herbs etc
	
	var fertility = (this.fertility * father.Virility() * Math.sqrt(opts.load));
	
	if(opts.force || Math.random() < fertility) {
		
		// TODO: Adjust litterSize
		var litterSize = opts.num || 1;
		litterSize = Math.floor(litterSize);
		litterSize = Math.max(litterSize, 1);

		var litterRace = Race.human; // TODO TEMP

		var gestationPeriod = opts.time || 24; //TODO TEMP
		
		
		Sex.Preg(father, mother, litterSize);
		
		// TODO: start pregnancy
		womb.pregnant     = true;
		womb.triggered    = false;
		womb.progress     = 0;
		womb.hoursToBirth = gestationPeriod;
		womb.litterSize   = litterSize;
		womb.litterRace   = litterRace;
		
		return true;
	}
	else
		return false;
}

PregnancyHandler.prototype.Update = function(step) {
	var hours = step.ToHours();
	hours *= this.gestationRate;
	
	var vags = this.entity.AllVags();
	for(var i = 0; i < vags.length; ++i) {
		var womb = vags[i].womb;
		if(womb.pregnant && !womb.triggered) {
			womb.progress     += (1-womb.progress) * hours / womb.hoursToBirth;
			womb.hoursToBirth -= hours;
			// Check for completion
			if(womb.hoursToBirth <= 0) {
				womb.triggered = true;
				
				//TODO: trigger
			}
		}
	}
	var womb = this.entity.Butt().womb;
	if(womb.pregnant && !womb.triggered) {
		womb.progress     += (1-womb.progress) * hours / womb.hoursToBirth;
		womb.hoursToBirth -= hours;
		// Check for completion
		if(womb.hoursToBirth <= 0) {
			womb.triggered = true;
			
			//TODO: trigger
		}
	}
}
