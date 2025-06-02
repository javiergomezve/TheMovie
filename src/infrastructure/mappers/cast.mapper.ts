import {CastMember} from '../interfaces/movie-db.responses.ts';
import {Cast} from '../../core/entities/cast.entity.ts';

export class CastMapper {
  static fromCastMemberToEntity(actor: CastMember): Cast {
    return {
      id: actor.id,
      name: actor.name,
      character: actor.character ?? 'No character',
      avatar: actor.profile_path
        ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
        : 'https://i.stack.imgur.com/l60Hf.png',
    };
  }
}
