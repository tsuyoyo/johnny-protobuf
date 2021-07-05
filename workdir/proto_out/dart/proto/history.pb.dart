///
//  Generated code. Do not modify.
//  source: proto/history.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:core' as $core;

import 'package:fixnum/fixnum.dart' as $fixnum;
import 'package:protobuf/protobuf.dart' as $pb;

class EditHistory extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'EditHistory', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..aInt64(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'timeStamp', protoName: 'timeStamp')
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'playerId', protoName: 'playerId')
    ..hasRequiredFields = false
  ;

  EditHistory._() : super();
  factory EditHistory({
    $fixnum.Int64? timeStamp,
    $core.String? playerId,
  }) {
    final _result = create();
    if (timeStamp != null) {
      _result.timeStamp = timeStamp;
    }
    if (playerId != null) {
      _result.playerId = playerId;
    }
    return _result;
  }
  factory EditHistory.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory EditHistory.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  EditHistory clone() => EditHistory()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  EditHistory copyWith(void Function(EditHistory) updates) => super.copyWith((message) => updates(message as EditHistory)) as EditHistory; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static EditHistory create() => EditHistory._();
  EditHistory createEmptyInstance() => create();
  static $pb.PbList<EditHistory> createRepeated() => $pb.PbList<EditHistory>();
  @$core.pragma('dart2js:noInline')
  static EditHistory getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<EditHistory>(create);
  static EditHistory? _defaultInstance;

  @$pb.TagNumber(1)
  $fixnum.Int64 get timeStamp => $_getI64(0);
  @$pb.TagNumber(1)
  set timeStamp($fixnum.Int64 v) { $_setInt64(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasTimeStamp() => $_has(0);
  @$pb.TagNumber(1)
  void clearTimeStamp() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get playerId => $_getSZ(1);
  @$pb.TagNumber(2)
  set playerId($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasPlayerId() => $_has(1);
  @$pb.TagNumber(2)
  void clearPlayerId() => clearField(2);
}

