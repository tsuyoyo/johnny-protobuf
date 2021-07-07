///
//  Generated code. Do not modify.
//  source: proto/playerService.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'player.pb.dart' as $3;
import 'area.pb.dart' as $0;
import 'instrument.pb.dart' as $2;
import 'studio.pb.dart' as $4;

class GetPlayerResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetPlayerResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..pc<$3.Player>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'players', $pb.PbFieldType.PM, subBuilder: $3.Player.create)
    ..hasRequiredFields = false
  ;

  GetPlayerResponse._() : super();
  factory GetPlayerResponse({
    $core.Iterable<$3.Player>? players,
  }) {
    final _result = create();
    if (players != null) {
      _result.players.addAll(players);
    }
    return _result;
  }
  factory GetPlayerResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetPlayerResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetPlayerResponse clone() => GetPlayerResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetPlayerResponse copyWith(void Function(GetPlayerResponse) updates) => super.copyWith((message) => updates(message as GetPlayerResponse)) as GetPlayerResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetPlayerResponse create() => GetPlayerResponse._();
  GetPlayerResponse createEmptyInstance() => create();
  static $pb.PbList<GetPlayerResponse> createRepeated() => $pb.PbList<GetPlayerResponse>();
  @$core.pragma('dart2js:noInline')
  static GetPlayerResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetPlayerResponse>(create);
  static GetPlayerResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$3.Player> get players => $_getList(0);
}

class GetPlayerDetailResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetPlayerDetailResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..aOM<$3.PlayerDetail>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'detail', subBuilder: $3.PlayerDetail.create)
    ..hasRequiredFields = false
  ;

  GetPlayerDetailResponse._() : super();
  factory GetPlayerDetailResponse({
    $3.PlayerDetail? detail,
  }) {
    final _result = create();
    if (detail != null) {
      _result.detail = detail;
    }
    return _result;
  }
  factory GetPlayerDetailResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetPlayerDetailResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetPlayerDetailResponse clone() => GetPlayerDetailResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetPlayerDetailResponse copyWith(void Function(GetPlayerDetailResponse) updates) => super.copyWith((message) => updates(message as GetPlayerDetailResponse)) as GetPlayerDetailResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetPlayerDetailResponse create() => GetPlayerDetailResponse._();
  GetPlayerDetailResponse createEmptyInstance() => create();
  static $pb.PbList<GetPlayerDetailResponse> createRepeated() => $pb.PbList<GetPlayerDetailResponse>();
  @$core.pragma('dart2js:noInline')
  static GetPlayerDetailResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetPlayerDetailResponse>(create);
  static GetPlayerDetailResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $3.PlayerDetail get detail => $_getN(0);
  @$pb.TagNumber(1)
  set detail($3.PlayerDetail v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasDetail() => $_has(0);
  @$pb.TagNumber(1)
  void clearDetail() => clearField(1);
  @$pb.TagNumber(1)
  $3.PlayerDetail ensureDetail() => $_ensure(0);
}

class GetPlayerDetailAreaResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetPlayerDetailAreaResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..pc<$0.City>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'activeAreas', $pb.PbFieldType.PM, protoName: 'activeAreas', subBuilder: $0.City.create)
    ..hasRequiredFields = false
  ;

  GetPlayerDetailAreaResponse._() : super();
  factory GetPlayerDetailAreaResponse({
    $core.Iterable<$0.City>? activeAreas,
  }) {
    final _result = create();
    if (activeAreas != null) {
      _result.activeAreas.addAll(activeAreas);
    }
    return _result;
  }
  factory GetPlayerDetailAreaResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetPlayerDetailAreaResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetPlayerDetailAreaResponse clone() => GetPlayerDetailAreaResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetPlayerDetailAreaResponse copyWith(void Function(GetPlayerDetailAreaResponse) updates) => super.copyWith((message) => updates(message as GetPlayerDetailAreaResponse)) as GetPlayerDetailAreaResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetPlayerDetailAreaResponse create() => GetPlayerDetailAreaResponse._();
  GetPlayerDetailAreaResponse createEmptyInstance() => create();
  static $pb.PbList<GetPlayerDetailAreaResponse> createRepeated() => $pb.PbList<GetPlayerDetailAreaResponse>();
  @$core.pragma('dart2js:noInline')
  static GetPlayerDetailAreaResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetPlayerDetailAreaResponse>(create);
  static GetPlayerDetailAreaResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$0.City> get activeAreas => $_getList(0);
}

class GetPlayerDetailInstrumentResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetPlayerDetailInstrumentResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..pc<$2.Instrument>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'instruments', $pb.PbFieldType.PM, subBuilder: $2.Instrument.create)
    ..hasRequiredFields = false
  ;

  GetPlayerDetailInstrumentResponse._() : super();
  factory GetPlayerDetailInstrumentResponse({
    $core.Iterable<$2.Instrument>? instruments,
  }) {
    final _result = create();
    if (instruments != null) {
      _result.instruments.addAll(instruments);
    }
    return _result;
  }
  factory GetPlayerDetailInstrumentResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetPlayerDetailInstrumentResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetPlayerDetailInstrumentResponse clone() => GetPlayerDetailInstrumentResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetPlayerDetailInstrumentResponse copyWith(void Function(GetPlayerDetailInstrumentResponse) updates) => super.copyWith((message) => updates(message as GetPlayerDetailInstrumentResponse)) as GetPlayerDetailInstrumentResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetPlayerDetailInstrumentResponse create() => GetPlayerDetailInstrumentResponse._();
  GetPlayerDetailInstrumentResponse createEmptyInstance() => create();
  static $pb.PbList<GetPlayerDetailInstrumentResponse> createRepeated() => $pb.PbList<GetPlayerDetailInstrumentResponse>();
  @$core.pragma('dart2js:noInline')
  static GetPlayerDetailInstrumentResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetPlayerDetailInstrumentResponse>(create);
  static GetPlayerDetailInstrumentResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$2.Instrument> get instruments => $_getList(0);
}

class GetPlayerDetailStudioResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetPlayerDetailStudioResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..pc<$4.Studio>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'studios', $pb.PbFieldType.PM, subBuilder: $4.Studio.create)
    ..hasRequiredFields = false
  ;

  GetPlayerDetailStudioResponse._() : super();
  factory GetPlayerDetailStudioResponse({
    $core.Iterable<$4.Studio>? studios,
  }) {
    final _result = create();
    if (studios != null) {
      _result.studios.addAll(studios);
    }
    return _result;
  }
  factory GetPlayerDetailStudioResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetPlayerDetailStudioResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetPlayerDetailStudioResponse clone() => GetPlayerDetailStudioResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetPlayerDetailStudioResponse copyWith(void Function(GetPlayerDetailStudioResponse) updates) => super.copyWith((message) => updates(message as GetPlayerDetailStudioResponse)) as GetPlayerDetailStudioResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetPlayerDetailStudioResponse create() => GetPlayerDetailStudioResponse._();
  GetPlayerDetailStudioResponse createEmptyInstance() => create();
  static $pb.PbList<GetPlayerDetailStudioResponse> createRepeated() => $pb.PbList<GetPlayerDetailStudioResponse>();
  @$core.pragma('dart2js:noInline')
  static GetPlayerDetailStudioResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetPlayerDetailStudioResponse>(create);
  static GetPlayerDetailStudioResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$4.Studio> get studios => $_getList(0);
}

class GetPlayerDetailFollowerResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetPlayerDetailFollowerResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..pc<$3.Player>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'followers', $pb.PbFieldType.PM, subBuilder: $3.Player.create)
    ..hasRequiredFields = false
  ;

  GetPlayerDetailFollowerResponse._() : super();
  factory GetPlayerDetailFollowerResponse({
    $core.Iterable<$3.Player>? followers,
  }) {
    final _result = create();
    if (followers != null) {
      _result.followers.addAll(followers);
    }
    return _result;
  }
  factory GetPlayerDetailFollowerResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetPlayerDetailFollowerResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetPlayerDetailFollowerResponse clone() => GetPlayerDetailFollowerResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetPlayerDetailFollowerResponse copyWith(void Function(GetPlayerDetailFollowerResponse) updates) => super.copyWith((message) => updates(message as GetPlayerDetailFollowerResponse)) as GetPlayerDetailFollowerResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetPlayerDetailFollowerResponse create() => GetPlayerDetailFollowerResponse._();
  GetPlayerDetailFollowerResponse createEmptyInstance() => create();
  static $pb.PbList<GetPlayerDetailFollowerResponse> createRepeated() => $pb.PbList<GetPlayerDetailFollowerResponse>();
  @$core.pragma('dart2js:noInline')
  static GetPlayerDetailFollowerResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetPlayerDetailFollowerResponse>(create);
  static GetPlayerDetailFollowerResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$3.Player> get followers => $_getList(0);
}

class GetPlayerDetailFolloweeResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetPlayerDetailFolloweeResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..pc<$3.Player>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'followers', $pb.PbFieldType.PM, subBuilder: $3.Player.create)
    ..hasRequiredFields = false
  ;

  GetPlayerDetailFolloweeResponse._() : super();
  factory GetPlayerDetailFolloweeResponse({
    $core.Iterable<$3.Player>? followers,
  }) {
    final _result = create();
    if (followers != null) {
      _result.followers.addAll(followers);
    }
    return _result;
  }
  factory GetPlayerDetailFolloweeResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetPlayerDetailFolloweeResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetPlayerDetailFolloweeResponse clone() => GetPlayerDetailFolloweeResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetPlayerDetailFolloweeResponse copyWith(void Function(GetPlayerDetailFolloweeResponse) updates) => super.copyWith((message) => updates(message as GetPlayerDetailFolloweeResponse)) as GetPlayerDetailFolloweeResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetPlayerDetailFolloweeResponse create() => GetPlayerDetailFolloweeResponse._();
  GetPlayerDetailFolloweeResponse createEmptyInstance() => create();
  static $pb.PbList<GetPlayerDetailFolloweeResponse> createRepeated() => $pb.PbList<GetPlayerDetailFolloweeResponse>();
  @$core.pragma('dart2js:noInline')
  static GetPlayerDetailFolloweeResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetPlayerDetailFolloweeResponse>(create);
  static GetPlayerDetailFolloweeResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$3.Player> get followers => $_getList(0);
}

