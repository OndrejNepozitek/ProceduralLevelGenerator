﻿namespace MapGeneration.Utils.ConfigParsing.Models
{
	using System.Collections.Generic;
	using GeneralAlgorithms.DataStructures.Common;

	public class MapDescriptionModel
	{
		public List<RoomShapesModel> DefaultRoomShapes { get; set; }

		public RoomsRangeModel RoomsRange { get; set; }

		public Dictionary<int, RoomModel> Rooms { get; set; }

		public List<IntVector2> Passages { get; set; }

		public RoomDescriptionsSetModel CustomRoomDescriptionsSet { get; set; }
	}
}