import {FiniteStateMachine} from './finiteStateMachine.js';
import {IdleState} from './idleState.js';
import {WalkState} from './walkState.js';
import {RunState} from './runState.js';
import {JumpState} from './jumpState.js';

export class CharacterFSM extends FiniteStateMachine {
    constructor(proxy) {
      super();
      this._proxy = proxy;
      this._Init();
    }
  
    _Init() {
      this._AddState('idle', IdleState);
      this._AddState('walk', WalkState);
      this._AddState('run', RunState);
      this._AddState('jump', JumpState);
    }
  };